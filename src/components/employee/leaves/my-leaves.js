import { Table } from "antd";
import React, { useState, Fragment } from "react";
import { Modal, Button } from "antd";
import { Form, Input, InputNumber, DatePicker } from "antd";

const columns = [
  {
    title: "leave_type",
    key: "leave_type",
    dataIndex: "leave_type",
  },
  {
    title: "from",
    key: "from",
    dataIndex: "from",
  },
  {
    title: "to",
    key: "to",
    dataIndex: "to",
  },
  {
    title: "no_of_days",
    key: "no_of_days",
    dataIndex: "no_of_days",
  },
  {
    title: "reason",
    key: "reason",
    dataIndex: "reason",
  },
  {
    title: "status",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "approved_by",
    key: "approved_by",
    dataIndex: "approved_by",
  },
];

const data = [
  {
    key: "1",
    leave_type: "Medical",
    from: "27-feb-2019",
    to: "28-feb-2019",
    no_of_days: "1",
    reason: "personal",
    status: "approved",
    approved_by: "me",
  },
  {
    key: "2",
    leave_type: "Maternity",
    from: "27-feb-2019",
    to: "28-feb-2019",
    no_of_days: "1",
    reason: "personal",
    status: "approved",
    approved_by: "me",
  },
  {
    key: "3",
    leave_type: "Casual",
    from: "27-feb-2019",
    to: "28-feb-2019",
    no_of_days: "1",
    reason: "personal",
    status: "approved",
    approved_by: "me",
  },
  {
    key: "4",
    leave_type: "Medical",
    from: "27-feb-2019",
    to: "28-feb-2019",
    no_of_days: "1",
    reason: "personal",
    status: "approved",
    approved_by: "me",
  },
];

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

export default function MyLeaves() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <Fragment>
      <Button type="primary" onClick={showModal}>
        Add Leave
      </Button>
      <Modal
        centered
        title="Add Leave"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="add-leave"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={"Leave Type"}
            label="Leave Type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={"From"}
            label="From"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name={"To"}
            label="To"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name={["user", "Reason"]} label="Reason">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Add
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Table
        bordered={true}
        columns={columns}
        dataSource={data}
        onChange={onChange}
        pagination={{ pageSize: 10 }}
      />
    </Fragment>
  );
}
