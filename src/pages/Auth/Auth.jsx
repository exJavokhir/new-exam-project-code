import classes from './main.module.scss'

import { Form, Input, Button, Checkbox ,Alert } from 'antd';
import { request } from '../../api/reuest'

import Header from '../../container/HeaderTwo/Header'

import Image1 from '../../assets/images/Group.png'
import Image2 from '../../assets/images/Rectangle 26.png'

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

const Auth = ({token,SetToken})=>{
    const onFinish = (values) => {
        request.post('/api/login', {
            email: values.username,
            password: values.password
        })
        .then(res=>{
            window.localStorage.setItem('sessionToken', res.data.token)
            SetToken(res.data.token);
        })
        .catch(err => {
            console.log(err);
        })
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return(
        <div className={classes.authWrapper}>
            <div className={classes.topPlace}>
                <div className={classes.container}>
                    <Header/>
                    <div className={classes.headerBottom}>
                        <div className={classes.leftSide}>
                            <form action="">
                                <select name="" id="" className={classes.selectOne}>
                                    <option value="">Любая категория</option>
                                    <option value="">Любая категория</option>
                                    <option value="">Любая категория</option>
                                </select>
                                <input type="search" placeholder="Что будем искать ?"/>
                                <select name="" id="">
                                    <option value="">По всей Узбекистану</option>
                                    <option value="">По всей Узбекистану</option>
                                    <option value="">По всей Узбекистану</option>
                                </select>
                                <button className={classes.buttonSubmit}>Найти</button>
                            </form>
                        </div>
                             <div className={classes.rightSide}>
                            <button type="submit" className={classes.addButton}> <span className={classes.plusSpan}>+</span> <span className={classes.titleSpan}> Добавить обьявления</span> </button>
                        </div>
                     </div>

                    
                </div>
            </div>
         <div className={classes.container}>
             <div className={classes.zaybal}>
            <div className={classes.leftSide}>
                <h1>Бесплатная регистрация</h1>
                        <Form
                            {...layout}
                            name="basic"
                            className={classes.FormWrapper}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            {
                                token ?  (
                                <Alert message="Error" type="error" showIcon />

                                ) : (<></>)
                            }
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input className={classes.input} />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                        </Button>
                            </Form.Item>
                        </Form>
                        <h4>или</h4>
                        <p className={classes.pItem}>
                            Войдите в систему, если у вас уже есть <br/> аккаунт kivi.uz
                        </p>
                     </div>
                     <div className={classes.rightSide}>
                         <img src={Image2} alt=""/>
                         <img className={classes.imageTwo} src={Image1} alt=""/>
                     </div>
                     </div>

                     <div className={classes.Footer}>
                         <div className={classes.container}>
                             <div className={classes.logo}>
                                 <img src="" alt=""/>
                                 <span></span>
                             </div>
                         </div>
                     </div>
                </div>
        </div>
    )
}

export default Auth