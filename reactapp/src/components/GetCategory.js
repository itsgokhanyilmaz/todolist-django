import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';
import { Form, Input,  Select, Icon, message } from 'antd';
import { Row, Col } from 'antd';

import axios from 'axios';

const { Option } = Select;

const columnsTodos = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
        title: 'Content',
        dataIndex: 'content',
        key: 'content',
    },
    {
        title: 'Due Date',
        dataIndex: 'due_date',
        key: 'due_date',
    },
    {
        title: 'Category Name',
        dataIndex: 'category.name',
        key: 'category.name',
    },

];

class GetCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todos: [],
            categories:[],
            current: 1,
            categoryName: undefined,

        };
        this.handleUserLogin = this.handleUserLogin.bind(this);

    }
    
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/todos')
            .then(response => response.json())
            .then(data => this.setState({ todos: data }));
        
        fetch('http://127.0.0.1:8000/api/categories')
            .then(response => response.json())
            .then(data => this.setState({ categories: data }));
    }

    handleUserLogin () {
        const { categoryName } = this.state;
        const formData = {
            name : categoryName,
        };
        console.log(formData);
        axios.post('http://127.0.0.1:8000/api/categories', formData)
            .then((res) => {
            })
            .catch((error) => {
                message.error('Login Failed!');
            });
    }

    handleChangeForm(value, type) {
        this.setState({
            [type]: value,
        });
    }
    

    render() {
        var categoryList = this.state.categories;
        var rows = [];
        for(let i=0; i< categoryList.length; i++){
            rows.push(<Option value={categoryList[i].id}> {categoryList[i].name}</Option>)
        }
        return (
            <div>
                <Row>
                    <Col xs={{ span: 8, offset: 8 }} lg={{ span: 8, offset: 1 }}>
                        <Form className="login-form">
                            <b>Add New Category:</b><Form.Item style={{ width: 250 }}>
                                <Input
                                    name="categoryName"
                                    onChange={(e) => this.handleChangeForm(e.target.value, 'categoryName')}
                                    prefix={<Icon type="appstore" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="appstore"
                                    placeholder="type a new category"
                                />
                            </Form.Item>
                            
                                <Button
                                    onClick={() => {this.handleUserLogin()}}
                                    type="danger" htmlType="submit" >
                                    Save
                                </Button>

                        </Form>
                    </Col>
                    <Col xs={{ span: 8, offset: 8 }} lg={{ span: 6, offset: 0 }}>
                    <Form className="login-form">
                            <b>Add Title:</b><Form.Item style={{ width: 250 }}>
                                <Input
                                    name="todoTitle"
                                    onChange={(e) => this.handleChangeForm(e.target.value, 'todoTitle')}
                                    prefix={<Icon type="appstore" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="appstore"
                                    placeholder="type a title"
                                />
                            </Form.Item>
                            <b>Add Content:</b><Form.Item style={{ width: 250 }}>
                                <Input
                                    name="todoContent"
                                    onChange={(e) => this.handleChangeForm(e.target.value, 'todoContent')}
                                    prefix={<Icon type="appstore" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="appstore"
                                    placeholder="type a content"
                                />
                            </Form.Item>
                            <b>Select Due date:</b><Form.Item style={{ width: 250 }}>
                                <Input
                                    name="todoDueDate"
                                    onChange={(e) => this.handleChangeForm(e.target.value, 'todoDueDate')}
                                    prefix={<Icon type="appstore" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="appstore"
                                    placeholder="select a due date"
                                />
                            </Form.Item>
                            
                        </Form>
                    </Col>
                    <Col xs={{ span: 0, offset: 5 }} lg={{ span: 6, offset: 0 }}>
                        <b>Select Category:</b><Form.Item style={{ width: 250 }}>
                            <Input
                                name="categoryName"
                                onChange={(e) => this.handleChangeForm(e.target.value, 'categoryName')}
                                prefix={<Icon type="appstore" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="appstore"
                                placeholder="select category"
                            />
                        </Form.Item>
                        <Button
                            onClick={() => { this.handleUserLogin() }}
                            type="danger" htmlType="submit" >
                            Save
                                </Button>
                    </Col>
                    
                </Row>
                <h2>MY TASKS:</h2>
                <Row>
                    <Col xs={{ span: 24, offset: 0 }} lg={{ span: 24, offset: 0 }}>
                        <Table columns={columnsTodos} dataSource={this.state.todos}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default GetCategory;