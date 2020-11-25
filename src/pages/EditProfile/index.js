import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Select, DatePicker, Space, Card } from 'antd';
import { updateProfile } from '../../redux/actions/user';

import './style.css';

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const EditProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  const initialValues = {
    ...user,
  }

  const handleFinish = (values) => {
    console.log('Success:', values);
    dispatch(updateProfile(values))
  };

  const handleFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space direction="vertical">
      <Card title="Edit Profile" style={{ width: 500 }} className="layout-profile">
        <Form
          {...layout}
          name="basic"
          initialValues={initialValues}
          onFinish={handleFinish}
          onFinishFailed={handleFinishFailed}
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
                message: 'Please input your full name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Birthday"
            name="birthday"
            rules={[
              {
                required: true,
                message: 'Please input your birthday',
              },
            ]}
          >
            <DatePicker format="YYYY/MM/DD" />
          </Form.Item>

          <Form.Item
            label="Gender"
            name="gender"
            rules={[
              {
                required: true,
                message: 'Please choose who your gender!',
              },
            ]}
          >
            <Select>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: 'Please input your address',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Bio"
            name="bio"
            rules={[
              {
                message: 'Please input your bio.',
              },
            ]}
          >
            <Input.TextArea showCount maxLength={400} />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

export default EditProfile
