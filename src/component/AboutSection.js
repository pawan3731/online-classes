import { Col, Row, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

function AboutSection() {
    const featureData = [
        {
            featureIcon: <Image preview={false} src="/images/expert-team.svg"></Image>,
            featureTitle: 'Live, interactive',
            featureDes: 'sessions with industry professionals.',
        },
        {
            featureIcon: <Image preview={false} src="/images/growth.svg"></Image>,
            featureTitle: 'Real-world',
            featureDes: 'projects that build your portfolio and confidence.',
        },
        {
            featureIcon: <Image preview={false} src="/images/idea.svg"></Image>,
            featureTitle: 'Personalized feedback',
            featureDes: 'to ensure continuous improvement.',
        },
    ]

    return (
        <div className='sectionPadding aboutSection'>
            <div className="container">
                <Row align="middle" gutter={{md: 24,xl: 100}}>
                    <Col md={12}>
                        <div className='aboutImg'>
                            <Image preview={false} src="/images/about.jpg"></Image>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className='aboutContent'>
                            <Title level={4} className='secondaryTitle blueColor'><span>About</span> Us</Title>
                            <Title level={1} className='primaryTitle blueColor'>Transforming Talent with Digital Expertise</Title>
                            <Text>At Online Tech partners, we’re passionate about empowering individuals to excel in the digital world. We specialize in online coaching for Web Design, Web Development, and Digital Marketing, helping you build the skills to create, innovate, and succeed</Text><br></br><br></br>
                            <Text>We will help you to create mockups and templates, Designing websites, Considering the user experience, with clients, using tools, Improving color theory and typography. We will help you to understand site requirements and use coding languages like HTML and Java to ensure a website looks like their client wants and is easy to use.</Text> <br/><br/>
                            <br/><br/>
                            <Link to="/Contact" type="primary" className='ant-btn-primary'> Get a Quote </Link>
                        </div>
                    </Col>
                </Row>

                <Row gutter={[24]}>
                    {featureData.map((items, index) => {
                        return (
                            <Col sm={12} lg={8}>
                                <div className='featuredCard'>
                                    <div className='featuredIcon'>
                                        {items.featureIcon}
                                    </div>
                                    <div className='featuredContent'>
                                        <Title level={4} className='secondaryTitle blueColor'>{items.featureTitle}</Title>
                                        <Text className='blueColor'>{items.featureDes}</Text>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default AboutSection;