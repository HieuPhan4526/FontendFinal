import { AutoComplete, Button, Form, Input, Space, Table } from 'antd';
import formCollapse from "../../assets/css/styleDashboard.module.css"
import React, { useEffect, useState } from 'react'
import { workService } from '../../services/WorkService';

export default function TypeOfWorkDashboard() {
    const [userData, setUserData] = useState();
    let [buttonStatus, setButtonStatus] = useState(true)
    const [form] = Form.useForm()
    const handleSearch = (value) => {

    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'tenLoaiCongViec',
            key: 'name',
            render: (text) => <a>{text}</a>,
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
                        if (window.confirm(`bạn có muốn xóa ${record.tenLoaiCongViec}`)) {
                            deleteType(record.id)
                        }
                    }} type="primary" danger>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];
    const getList = () => {
        workService.getDetailType().then((result) => {
          let userList = result.data.content
          let list = userList.map((user, index) => {
            return {
              key: index,
              id: user.id,
              tenLoaiCongViec: user.tenLoaiCongViec,
            }
          })
          setUserData(list)
        }).catch((error) => {
          console.log(error);
        })
    }
    const addNew = (data) => {
        workService.addDetailType(data).then((result) => {
          getList()
          alert("Thêm Thành công")
          document.getElementById("form").classList.remove("show")
        }).catch((error) => {
          console.log(error);
        })
    }
    const update = (values) => {
        workService.updateDetailType(values.id, values).then((result) => {
          getList()
          alert("Cập nhật Thành công")
          document.getElementById("form").classList.remove("show")
        }).catch((error) => {
          console.log(error);
        })
    }
    const deleteType = (id) => {
        workService.deleteDetailType(id).then(() => {
          getList()
          alert(`Xóa Thành Công`)
        }).catch()
    }
    const onFinish = (values) => {
        values.id !== 0 ? update(values) : addNew(values)
    }
    useEffect(() => {
        getList();
      }, [])
    return (
        <div>
            <div className={formCollapse.thead}>
                <Button onClick={() => {
                    form.setFieldsValue({
                        tenLoaiCongViec: "",
                        id: 0,
                    })
                    setButtonStatus(false)
                }} href='#form' type="primary" data-toggle="collapse" style={{ background: "green" }}>
                    Add Type of work
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
          <h4>{buttonStatus ? "Cập Nhật " : "Thêm "}</h4>
          <Form form={form} name="nest-messages" onFinish={onFinish}>
            <Form.Item
              name={['id']}
              label="ID"
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              name={['tenLoaiCongViec']}
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
              wrapperCol={{
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit" disabled={buttonStatus ? true : false} style={{ margin: "10px" }} ghost>
                Thêm 
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
