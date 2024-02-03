import React, { useState } from "react";
import { Button, Form, Input, InputNumber, Radio, DatePicker } from "antd";
import { Layout } from "antd";
import { Select, Space } from "antd";

const { Content } = Layout;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function AddPet() {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Content
        style={{
          margin: "10px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 360,
          }}
          className="flex items-center justify-center flex-col"
        >
          <div className="text-4xl ml-14 pb-6 text-center">Add Pet</div>
          <div className="justify-center items-center">
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              style={{
                maxWidth: 600,
              }}
              scrollToFirstError
              className="justify-between"
            >
              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Type!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="breed"
                label="Breed"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Breed!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Located!",
                  },
                ]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>
              <Form.Item name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Breed!",
                  },
                ]}>
                <Select
                  defaultValue="Male"
                  style={{
                    width: 120,
                  }}
                  options={[
                    {
                      value: "male",
                      label: "Male",
                    },
                    {
                      value: "female",
                      label: "Female",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                name="age"
                label="Age"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Age!",
                  },
                ]}
              >
                <InputNumber min={0} addonAfter={"Year(s)"} />
              </Form.Item>
              <Form.Item
                name="weight"
                label="Weight"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Weight!",
                  },
                ]}
              >
                <InputNumber min={1} addonAfter={"Kgs"} />
              </Form.Item>
              <Form.Item
                name="height"
                label="Height"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Heigth!",
                  },
                ]}
              >
                <InputNumber min={1} addonAfter={"cms"} />
              </Form.Item>

              <Form.Item
                name="diettype"
                label="Diet Type"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Diet Type!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="allergies"
                label="Allergy History"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Allergies!",
                  },
                ]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>
              <Form.Item
                name="isVaccinated"
                label="Vaccinated"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Vaccination Data!",
                  },
                ]}
              >
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={1}>Vaccinated</Radio>
                  <Radio value={2}>Not Vaccinated</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item name="shotDate" label="Recent Vaccination Date">
                <DatePicker onOk={onOk} />
              </Form.Item>

              <Form.Item
                name="medicalHistory"
                label="Medical History"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's Medical!",
                  },
                ]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>
              <Form.Item
                name="otherDetails"
                label="Other Details"
                rules={[
                  {
                    required: true,
                    message: "Please input your Pet's other details!",
                  },
                ]}
              >
                <Input.TextArea showCount maxLength={100} />
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ backgroundColor: "rgb(22, 119, 255)" }}
                >
                  Add Pet
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Content>
    </>
  );
}

export default AddPet;
