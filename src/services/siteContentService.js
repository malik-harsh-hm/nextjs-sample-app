// Works as a content repository service.

import { getMarkupContent, getDirectories } from '../utils/utils'
import path from 'path';

const CONTENT_BASE_DIRECTORY = 'siteContent';
const CONTENT_FILE = 'index.md';

export async function getBaseMarkup(baseFolder) {

    let basePath = path.join(CONTENT_BASE_DIRECTORY, baseFolder, CONTENT_FILE);
    return await getMarkupContent(basePath, baseFolder);

}
export async function getNestedMarkup(baseFolder) {

    let folders = getDirectories(path.join(CONTENT_BASE_DIRECTORY, baseFolder));
    let data = await Promise.all(folders.map(async (subFolder) => {
        let slug = subFolder;
        let basePath = path.join(CONTENT_BASE_DIRECTORY, baseFolder, subFolder, CONTENT_FILE);
        return await getMarkupContent(basePath, slug);
    }));

    return data;
}