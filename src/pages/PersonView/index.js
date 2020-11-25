import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Button,
  Select,
  Input,
  Form,
  Spin,
  DatePicker, Space, Card
} from 'antd';

import './style.css';

const { Option } = Select;
const personDB = [
  {
    id: 'me',
    name: 'Person Person',
    birthday: '2020-10-10',
    gender: 'male',
    address: 'Address',
    bio: 'Description'
  },
  {
    id: '111',
    name: '111 111',
    birthday: '2020-10-10',
    gender: 'male',
    address: 'Address',
    bio: 'Description'
  },
  {
    id: '222',
    name: '222 222',
    birthday: '2020-10-10',
    gender: 'female',
    address: 'Female',
    bio: 'Description'
  },
  {
    id: '333',
    name: '333 333',
    birthday: '2020-10-10',
    gender: 'male',
    address: 'Address',
    bio: 'Description'
  }
]
const personData = {
  id: 'me',
  name: 'Person Person',
  birthday: '2020-10-10',
  gender: 'male',
  address: 'Address',
  bio: 'Description'
}

function App(props) {
  const personForm = useRef(null);
  console.log('HHHH')

  const personId = props.match.params.id
  const person = personDB.find(person => person.id === personId)
  console.log({ person })
  if (personForm.current) personForm.current.setFieldsValue(person);


  const linkData = [
    {
      id: '111',
      title: 'Parent1'
    }, {
      id: '222',
      title: 'Parent2'
    },
  ]
  return (
    <div className="App">
      <Space direction="vertical">
        <Card title="Detail" style={{ width: 1000 }}>
          <Form
            ref={personForm}
            labelCol={{ span: 9 }}
            wrapperCol={{ span: 15 }}
            layout="horizontal"
            className="form-styled"
          >
            <Row gutter={[40, 30]}>
              <Col xs={12} lg={12} xl={12}>
                <Form.Item
                  labelAlign="left"
                  required={false}
                  label={<span className="ant-form__label">Name</span>}
                  key="name"
                  name="name"
                >
                  <Input
                    disabled={false}
                  />
                </Form.Item>

                <Form.Item
                  labelAlign="left"
                  required={false}
                  label={<span className="ant-form__label">Birthday</span>}
                  key="birthday"
                  name="birthday"
                >
                  <Input
                    disabled={false}
                  />
                </Form.Item>

                <Form.Item
                  labelAlign="left"
                  required={false}
                  label={<span className="ant-form__label">Gender</span>}
                  key="gender"
                  name="gender"
                >
                  <Select disabled>
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  labelAlign="left"
                  required={false}
                  label={<span className="ant-form__label">Address</span>}
                  key="address"
                  name="address"
                >
                  <Input
                    disabled={false}
                  />
                </Form.Item>

                <Form.Item
                  labelAlign="left"
                  required={false}
                  label={<span className="ant-form__label">Bio</span>}
                  key="bio"
                  name="bio"
                >
                  <Input.TextArea
                    disabled={false}
                    autoSize={{ minRows: 3, maxRows: 3 }}
                  />
                </Form.Item>
              </Col>
              <Col xs={12} lg={12} xl={12}>
                <Card title="Parents">
                  {
                    linkData.map(link => (
                      <div><Link to={link.id}>{link.title}</Link></div>
                    ))
                  }
                </Card>
                <Card title="Siblings">
                  {
                    linkData.map(link => (
                      <div><Link to={link.id}>{link.title}</Link></div>
                    ))
                  }
                </Card>
                <Card title="Children">
                  {
                    linkData.map(link => (
                      <div><Link to={`${link.id}`}>{link.title}</Link></div>
                    ))
                  }
                </Card>

              </Col>
            </Row>
          </Form>
        </Card>
      </Space>
    </div>
  );
}

export default App;
