import { AutoComplete, Button, Select, Space, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { dashboardServices } from '../../services/DashboardServices';
import { Form, Input, InputNumber } from 'antd';
import formCollapse from "../../assets/css/styleDashboard.module.css"
import { administrativeJob, workService } from '../../services/WorkService';
export default function WorkDashboard() {
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
      title: 'Image',
      dataIndex: 'hinhAnh',
      key: 'image',
      render: (img) => {
        return <img src={`${img}`} style={{ width: "100px" }} alt="" />
      }
    },
    {
      title: 'Name',
      dataIndex: 'tenCongViec',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Rate',
      dataIndex: 'danhGia',
      key: 'rate',
    },
    {
      title: 'Price',
      dataIndex: 'giaTien',
      key: 'price',
    },
    {
      title: 'Description',
      dataIndex: 'moTa',
      key: 'des',
      render: (des) => {
        return des.length > 100 ? des.substr(0, 100) + "..." : des
      }
    },
    {
      title: 'Stars',
      key: 'star',
      dataIndex: 'saoCongViec'
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
            if (window.confirm(`bạn có muốn xóa tài khoản tên ${record.tenCongViec}`)) {
              deleteUser(record.id)
            }
          }} type="primary" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ]
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
  const getWorkList = () => {
    administrativeJob.getListWorkService().then((result) => {
      let workList = result.data.content
      let list = workList.map((work, index) => {
        return {
          key: index,
          id: work.id,
          hinhAnh: work.hinhAnh,
          tenCongViec: work.tenCongViec,
          danhGia: work.danhGia,
          giaTien: work.giaTien,
          moTaNgan: work.moTaNgan,
          moTa: work.moTa,
          saoCongViec: work.saoCongViec,
          maChiTietLoaiCongViec: work.maChiTietLoaiCongViec,
          nguoiTao: 1
        }
      })
      setUserData(list)
    }).catch((error) => {
      console.log(error);
    })
  }
  const addWork = (data) => {
    workService.addWork(data).then((result) => {
      console.log(result)
      getWorkList()
      alert("Thêm Thành công")
      document.getElementById("form").classList.remove("show")
    }).catch((error) => {
      console.log(error);
    })
  }
  const updateWork = (values) => {
    workService.updateWork(values.id, values).then((result) => {
      getWorkList()
      alert("Cập nhật Thành công")
      document.getElementById("form").classList.remove("show")
    }).catch((error) => {
      console.log(error);
    })
  }
  const deleteUser = (id) => {
    workService.deleteWork(id).then(() => {
      getWorkList()
      alert("Xóa Thành công")
    }).catch()
  }
  const handleSearch = (value) => {
    if (value !== "") {
      workService.searchWorkName(value).then((result) => {
        let userList = result.data.content
        let list = userList.map((work, index) => {
          return {
            key: index,
            id: work.congViec.id,
            hinhAnh: work.congViec.hinhAnh,
            tenCongViec: work.congViec.tenCongViec,
            danhGia: work.congViec.danhGia,
            giaTien: work.congViec.giaTien,
            moTaNgan: work.congViec.moTaNgan,
            moTa: work.congViec.moTa,
            saoCongViec: work.congViec.saoCongViec,
            maChiTietLoaiCongViec: work.congViec.maChiTietLoaiCongViec,
            nguoiTao: 1
          }
        })
        setUserData(list)
      }).catch()
    } else getWorkList()
  }
  const onFinish = (values) => {
    console.log(values)
    values.id !== 0 ? updateWork(values) : addWork(values)
  };
  useEffect(() => {
    getWorkList()
  }, [])
  return (
    <div className='container'>
      <div className={formCollapse.thead}>
        <Button onClick={() => {
          form.setFieldsValue({
            id: 0,
            hinhAnh: "",
            tenCongViec: "",
            danhGia: "",
            giaTien: "",
            moTa: "",
            saoCongViec: "",
            moTaNgan: "",
            maChiTietLoaiCongViec: ""
          })
          setButtonStatus(false)
        }} href='#form' type="primary" data-toggle="collapse" style={{ background: "green" }}>
          Add Công việc
        </Button>
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 500 }}
          onSearch={handleSearch}
        >
          <Input.Search size="large" placeholder="Tìm Kiếm Theo Tên Công Việc" enterButton />
        </AutoComplete>
      </div>

      <Table columns={columns} dataSource={userData} />
      <div id='form' className={`${formCollapse.styleCollapse} collapse`}>
        <div className={`${formCollapse.form} formm `}>
          <h4>{buttonStatus ? "Cập Nhật Công Việc" : "Thêm Công Việc"}</h4>
          <Form form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
              name={['id']}
              label="ID"
            >
              <Input disabled />
            </Form.Item>
            <Form.Item
              name={['tenCongViec']}
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
              name={['hinhAnh']}
              label="Image"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={['danhGia']}
              label="Rate"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name={['saoCongViec']}
              label="Stars"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name={['maChiTietLoaiCongViec']}
              label="Detail Type"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item name={['giaTien']} label="Price" rules={[
              {
                required: true,
              },
            ]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={['moTaNgan']}
              label="Short - Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              name={['moTa']}
              label="Description"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input.TextArea style={{ height: "100px" }} />
            </Form.Item>
            <Form.Item
            >
              <Button type="primary" htmlType="submit" disabled={buttonStatus ? true : false} style={{ margin: "10px" }} ghost>
                Thêm Work
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
