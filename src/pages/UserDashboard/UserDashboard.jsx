import { AutoComplete, Button, Select, Space, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { dashboardServices } from '../../services/DashboardServices';
import { Form, Input, InputNumber } from 'antd';
import formCollapse from "../../assets/css/styleDashboard.module.css"


export default function UserDashboard() {
  const [userData, setUserData] = useState();
  let [buttonStatus, setButtonStatus] = useState(true)
  const [form] = Form.useForm()
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },

    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Technical Skill',
      key: 'skill',
      dataIndex: 'skill',
      render: (_, { skill }) => (
        <>
          {skill ? skill.map((tag) => {
            let color = 'geekblue';
            if (tag === 'HTML') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          }) : ""}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => {
            form.setFieldsValue(record)
            setButtonStatus(true)
          }} href='#form' type="primary" data-toggle="collapse" >
            Edit
          </Button>
          <Button onClick={() => {
            if (window.confirm(`bạn có muốn xóa tài khoản tên ${record.email}`)) {
              deleteUser(record.id)
            }
          }} type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  const getUser = () => {
    dashboardServices.getUserList().then((result) => {
      let userList = result.data.content
      let list = userList.map((user, index) => {
        return {
          key: index,
          id: user.id,
          name: user.name,
          email: user.email,
          age: user.birthday,
          role: user.role,
          skill: user.skill,
        }
      })
      setUserData(list)
    }).catch((error) => {
      console.log(error);
    })
  }
  const addUser = (data) => {
    dashboardServices.addUser(data).then((result) => {
      getUser()
      alert("Thêm Thành công")
      document.getElementById("form").classList.remove("show")
    }).catch((error) => {
      console.log(error);
    })
  }
  const updateUser = (values) => {
    dashboardServices.updateUser(values.id, values).then((result) => {
      getUser()
      alert("Cập nhật Thành công")
      document.getElementById("form").classList.remove("show")
    }).catch((error) => {
      console.log(error);
    })
  }
  const deleteUser = (id) => {
    dashboardServices.deleteUser(id).then(() => {
      getUser()
    }).catch()
  }
  const onFinish = (values) => {
    values.id !== 0 ? updateUser(values) : addUser(values)
  };
  const handleSearch = (value) => {
    if (value !== "") {
      dashboardServices.searchUserName(value).then((result) => {
        let userList = result.data.content
        let list = userList.map((user, index) => {
          return {
            key: index,
            id: user.id,
            name: user.name,
            email: user.email,
            age: user.birthday,
            role: user.role,
          }
        })
        setUserData(list)
      }).catch()
    } else getUser()
  }
  useEffect(() => {
    getUser();
  }, [])
  return (
    <div className='container'>
      <div className={formCollapse.thead}>
        <Button onClick={() => {
          form.setFieldsValue({
            name: "",
            email: "",
            key: "",
            id: 0,
            age: "",
            role: "",
            skill: [],
          })
          setButtonStatus(false)
        }} href='#form' type="primary" data-toggle="collapse" style={{ background: "green" }}>
          Add User
        </Button>
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 500 }}
          onSearch={handleSearch}
        >
          <Input.Search size="large" placeholder="Tìm Kiếm Theo Tên" enterButton />
        </AutoComplete>
      </div>

      <Table columns={columns} dataSource={userData} />
      <div id='form' className={`${formCollapse.styleCollapse} collapse`}>
        <div className={`${formCollapse.form} formm `}>
          <h4>{buttonStatus ? "Cập Nhật User" : "Thêm User"}</h4>
          <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
              name={['id']}
              label="ID"
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              name={['name']}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['email']}
              label="Email"
              rules={[
                {
                  type: 'email',
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            {buttonStatus ? "" : <Form.Item
              name={['password']}
              label="password"
              rules={[
                {
                  type: 'password',
                  required: true,
                },
              ]}
            >
              <Input.Password />
            </Form.Item>}

            <Form.Item
              name={['birthday']}
              label="Age"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={['role']} label="Role" rules={[
              {
                required: true,
              },
            ]}>
              <Input />
            </Form.Item>
            <Form.Item name={['skill']} label="Skills" initialValue={[]}>
              <Select mode="multiple" placeholder="Please select skill">
                <Select.Option value="HTML">HTML</Select.Option>
                <Select.Option value="CSS">CSS</Select.Option>
                <Select.Option value="Javascript">Javascript</Select.Option>
                <Select.Option value="REACTJS">REACTJS</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit" disabled={buttonStatus ? true : false} style={{ margin: "10px" }} ghost>
                Thêm User
              </Button>
              <Button type="primary" htmlType="submit" disabled={buttonStatus ? false : true}>
                Cập Nhật
              </Button>
            </Form.Item>
          </Form>
        </div>

      </div>
    </div>
  )
}
