import { Col, Row, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function ChooseSection() {
    const chooseList = [
        {
            chooseIcon: <Image preview={false} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_1.png'></Image>,
            chooseTitle: 'Experienced Mentors',
            chooseDes: 'Learn directly from professionals who have worked with top companies and bring industry insights.',
        },
        {
            chooseIcon: <Image preview={false} src='https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_2.png'></Image>,
            chooseTitle: 'Flexible Learning',
            chooseDes: 'Access courses anytime, anywhere, and learn at your own pace with our online modules.',
        },
        {
            chooseIcon: <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/service_shape_image_3.png"></Image>,
            chooseTitle: 'Career Support',
            chooseDes: 'From building an impressive resume to landing your first job or freelance gig, we’re here to guide you every step of the way.',
        },
    ]


    return (
        <div className='sectionPadding chooseSection'>
            <div className="container">
                <Row align="middle" gutter={[50]}>
                    <Col md={12}>
                        <div className='chooseImg'>
                            <Image preview={false} src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/04/feature_img.jpg"></Image>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className='chooseContent'>
                            <Title level={4} className='secondaryTitle blueColor'><span>Why</span> Choose Us!</Title>
                            <Title level={1} className='primaryTitle blueColor'>Best online Tech Agency</Title>
                            <Text>Ready to start your journey in web design, development, or digital marketing? Join our community and gain the skills, confidence, and support you need to thrive in the digital world.</Text>
                            <div className='iconListWrap'>
                                {chooseList.map((items, index) => {
                                    return (
                                        <div className='iconList'>
                                            <div className='iconListIcon'>
                                                {items.chooseIcon}
                                            </div>
                                            <div className='iconListTxt'>
                                                <Title level={5} className='secondaryTitle blueColor'>{items.chooseTitle}</Title>
                                                <Text>{items.chooseDes}</Text>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <br /><br />
                            <Link to="/contact" type="primary" className='ant-btn-primary' danger> Contact Us </Link>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default ChooseSection;