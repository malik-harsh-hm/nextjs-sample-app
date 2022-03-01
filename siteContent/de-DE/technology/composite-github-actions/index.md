---
articleHeading: 'Verwenden von zusammengesetzten GitHub-Aktionen, um Ihre Workflows kleiner und wiederverwendbarer zu machen'
articleImage: '/images/blogs/composite-github-actions.png'
articleDate: '8th December 2021'
articleTags: 'github'
articleDescription: 'article description'
---

At work there has been a drive to move existing CI/CD pipelines from Jenkins to GitHub Workflows in order to empower developers with more control over test, feature and production deployments.

In addition, we've recently moved to a monorepo structure and are building new workflows that deploy multiple applications at once. A result of using a monorepo structure is that the GitHub Workflows vary in size and purpose. For example, some carry out simple tasks such as unit testing an individual component whereas other, larger workflows deploy full production environments.

This post aims to demonstrate how composite GitHub Actions can be used to to split workflows into smaller, reusable components.

* * *

Local GitHub Actions
--------------------

Before discussing Composite actions, we should first talk about local GitHub Actions. Generally, when you're creating GitHub Workflows you will be using actions found on the [Marketplace](https://github.com/marketplace?type=actions) but you don't have to publish to the Marketplace to use your own. Did you know you can `use` local GitHub Actions stored in your repository?.

Local actions are well suited to componentized GitHub Workflows as they can be maintained alongside other infrastructure code stored in the same repository. It's a good practice to store them next to the GitHub Workflow's `.github/workflows` directory in `.github/actions` but in reality they can be located anywhere in the repository.

Each custom action requires its own directory and `action.yml` to define it. Once the `action.yml` is created you can add the [standard metadata](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions) to define how the action will operate.

When you're ready to use your local action in a workflow, use the following syntax (assuming you've stored your custom actions in the `.github/actions` directory).

    jobs:
      run-local-action:
        steps:
          # Checkout the repository first
          # Otherwise the workflow won't be able to find the action
        - use: actions/checkout@v2
        - name: Run custom action
          # Use the location in the repository (without action.yml)
          uses: ./.github/actions/my-custom-action
          with:
            custom-input: 10

Local actions are a great way to create GitHub actions that are tailored to how you want them to operate without having to manage yet another product release.

Composite Actions
-----------------

A Composite action is one of [three different types custom GitHub Actions](https://docs.github.com/en/actions/creating-actions/about-custom-actions) that can be created (composite, JavaScript and Docker). The main difference is that a composite action's `action.yml -> runs` property contains a list of steps to run as opposed to a program to execute.

    runs:
      using: "composite"
      steps:

The `steps` section acts almost exactly the same as the [`steps` section in a workflow](https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idsteps), with a few differences that are outlined later.

Creating a local, composite GitHub Action looks like the perfect way to split up GitHub Workflows!

Should you split your workflows up into composite actions?
----------------------------------------------------------

Having utilised composite actions for a few weeks I believe you absolutely should use them as they have led to smaller, more readable workflows as each action has a specific purpose.

Below I've added some advantages and limitations of using composite actions in your workflows.

### Advantages

*   Separate large workflows into multiple files
*   Create componentized actions to be used in multiple workflows - reducing duplication
*   Many steps are condensed into a single one within the `Actions` view on GitHub, improving the ability to track a workflows progress
*   The descriptive nature of an `action.yml` file improves the readability of a GitHub workflow when understanding necessary inputs and outputs.

### Limitations

*   They can't read GitHub Secrets - you have to pass them in
*   Have to define the `shell` on each step - although this is more of a minor annoyance.

* * *

Example
-------

Imagine you have a GitHub Workflow that deploys a Node.js/Express API _somewhere_ and a React application to AWS S3. It will be stored at `.github/workflows/deploy-app.yml` in your repository and would look something like the below:

    name: Deploy app
    on:
      pull_request:
    jobs:
      deploy-api:
        outputs:
          # Output the deployed API URL for consumption later
          url: ${{ steps.deploy.output.url }}
        steps:
          - uses: actions/checkout@v2
          # ...more steps to deploy an API and output a URL
      deploy-frontend:
        name: Deploy frontend to AWS S3
        needs: deploy-api
        steps:
          - uses: actions/checkout@v2
          - uses: aws-actions/configure-aws-credentials@v1
            with:
              # Always store tokens in a secret manager. Here I am using GitHub Secrets
              aws-access-key-id: ${{ secrets.AWS_ACCESS_ID }}
              aws-secret-access-key: ${{ secrets.AWS_SECRET_KEY }}
              aws-region: eu-west-1
          - uses: actions/setup-node@v2
            with:
              node-version: 14
          - name: Install dependencies
            working-directory: ./frontend
            run: npm ci
          - name: Build app
            working-directory: ./frontend
            run: npm run build
            env:
              APP_NAME: Demo
              API_URL: ${{ needs.deploy-api.outputs.url }}
          - name: Upload app to AWS S3
            working-directory: ./frontend
            run: aws s3 sync build s3://my-bucket --delete

While this workflow itself is relatively small and readable, imagine if you added additional apps to deploy or simply a more complicated frontend deployment - it would likely become bloated and much more difficult to read.

To future-proof this workflow, we can consolidate much of the `frontend-deploy` job into a composite action:

### Creating the custom action file

First we create the directory and `action.yml`. As I said previously, it's consistent to store custom actions in a `.github/actions` directory. So my `deploy-frontend-to-s3` action will be stored as `.github/actions/deploy-frontend-to-s3/action.yml` giving us the repository structure:

    .github
      - workflows
        - deploy-app.yml
      - actions
        - deploy-api/action.yml
        - deploy-frontend-to-s3/action.yml
    

### Implementing the `deploy-frontend-to-s3` composite action

Now that the `action.yml` file is created we can migrate many of the `deploy-frontend` job's steps out of the workflow and into it.

First we can add the `name`, `description` and `inputs` to the `action.yml`:

    name: "Deploy Frontend to S3"
    description: "Builds and deploys the React frontend to AWS S3"
    inputs:
       aws-access-key-id:
         required: true
         description: "The aws-access-key-id used to authenticate with AWS"
       aws-secret-access-key:
         required: true
         description: "The aws-secret-access-key used to authenticate with AWS"
       app-name:
         required: false
         description: "The app name used by the React app"
         default: Demo
       api-url:
         required: true
         description: "The URL of the Express app"

Next we can create the part of the action which will run the commands previously located in the workflow. Note how we can refer to the inputs above with `${{ inputs.input-name }}`.

    # ...name, description and inputs as above
    runs:
      using: "composite"
      steps:
        - uses: aws-actions/configure-aws-credentials@v1
          with:
            # Actions cannot access secrets so pass them in as inputs
            aws-access-key-id: ${{ inputs.aws-access-key-id }}
            aws-secret-access-key: ${{ inputs.aws-secret-access-key }}
            aws-region: eu-west-1
        - uses: actions/setup-node@v2
          with:
            node-version: 14
        - name: Install dependencies
          working-directory: ./frontend
          run: npm ci
        - name: Build app
          working-directory: ./frontend
          run: npm run build
          env:
            APP_NAME: ${{ inputs.app-name }}
            API_URL: ${{ inputs.api-url }}
        - name: Upload app to AWS S3
          working-directory: ./frontend
          run: aws s3 sync build s3://my-bucket --delete

Notice that the `steps` section is almost a copy and paste from the `steps` section of the workflow. The only part missing is the `actions/checkout` as it is required to be in the workflow so that GitHub can access the local action.

### Using the custom actions in the `deploy-app` workflow

Now that we've built the custom action, we can use it in our workflow:

    name: Deploy app
    on:
      pull_request:
    jobs:
      deploy-api:
        outputs:
          # Output the deployed API URL for consumption later
          url: ${{ steps.deploy.output.url }}
        steps:
          - uses: actions/checkout@v2
          -  id: deploy
             uses: ./.github/actions/deploy-api
      deploy-frontend:
        name: Deploy frontend to AWS S3
        needs: deploy-api
        steps:
          - uses: actions/checkout@v2
          - name: Deploy frontend
            # Directory name only
            uses: ./.github/actions/deploy-frontend-to-s3
            with:
              aws-access-key-id: ${{ secrets.AWS_ACCESS_ID }}
              aws-secret-access-key: ${{ secrets.AWS_SECRET_KEY }}
              # won't pass in app-name as it's defaulted to "Demo"
              api-url: ${{ needs.deploy-api.outputs.url }}

And we're done! We've reduced the size of the `deploy-app` workflow and made a reusable composite action to deploy the frontend to S3.

### Using files in the action directory

While building a composite action you may want to create utility files which are consumed by the `action.yml`. When doing this you should refer to them using the `${{ github.action_path }}` variable so that if you relocate the action, you will not need to update any paths.

So for a file named `.github/actions/deploy-frontend-to-s3/fetch-bucket-name.sh`, you can refer to it as `${{ github.action_path }}/fetch-bucket-name.sh` in the action.

* * *

Round up
--------

In this post I have demonstrated how composite actions can help to break a GitHub Workflow into smaller, consumable components and explained why its advantageous to do so.

Do you deal with huge workflows at work or are you already using composite actions? Let me know in the comments below.

If this article has helped you, drop a reaction!

Thanks for reading!