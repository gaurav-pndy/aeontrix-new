

import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

function GenerateAI()  {
  return (
     <section
      id="services"
      className="section content-section"
      style={{ backgroundColor: '#f5f5f5' }}>
    <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
      <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',maxWidth:'1350px' }}>
        <h2 className="text-center mb-3">Begin Your AI Transformation Journey</h2>
        <p className="text-center mb-4 text-muted">
          Take the first step toward a more efficient, cost-effective workforce. Tell us what you want to achieve with AI employees.
        </p>
        <br></br>

      <Container style={{backgroundColor:'#f5f5f5',borderRadius:'10px',height:'370px'}}>
        <Row>
          <Col md={8}>
            <Form>
              <Form.Group controlId="aiDescription">
                <Form.Label style={{paddingRight:'358px',paddingTop:'30px'}}>Describe your ideal AI workforce</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5} style={{height:'200px', width:'80%',marginLeft:'80px'}}
                  
                />
                <Form.Text className="text-muted">
                  Be specific about your business needs, challenges, and goals
                </Form.Text>
              </Form.Group>
            </Form>
          </Col>

          <Col md={4}>
            <div className="mb-3" style={{paddingRight:'10s5px',paddingTop:'30px'}}><strong>Prompt suggestions:</strong></div>
           <ul className="list-unstyled text-muted" style={{ paddingRight: '100px', fontSize: '15px',textAlign:'left' }}>
              <li className="d-flex align-items-start mb-2">
                <span style={{ width: '45px',color:'black'}}>💡</span>
                <span>Replace our sales team with AI that can handle international clients</span>
              </li>
              <li className="d-flex align-items-start mb-2">
                <span style={{ width: '45px' }}>💡</span>
                <span>Create AI marketing specialists that can generate content in multiple languages</span>
              </li>
              <li className="d-flex align-items-start mb-2">
                <span style={{ width: '45px' }}>💡</span>
                <span>Build an AI HR department that handles recruitment and onboarding</span>
              </li>
            </ul>

             <Button variant="dark" style={{width: '250px',textAlign: 'center',margin: '20px auto 20px 10px',display: 'block'}}>Generate AI Employee Plan</Button>
          </Col>
        </Row>
        </Container>

        <hr className="my-5" />

        <Row className="text-center">
          <Col md={4}>
            <Card className="border-1" style={{width:'90%',height:'250px',left:'59px',boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth:'1350px'}}>
              <Card.Body className="text-start"> {/* Align all text left */}
                <div className="mb-3" style={{fontSize:'2rem'}}>⚡</div>
                <Card.Title>Instant Deployment</Card.Title>
                <Card.Text style={{ fontSize: '14px',paddingTop:'20px' }}> {/* Reduce text size */}
                  Your AI employees can be ready to work within 24 hours of approval.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-1" style={{width:'90%',height:'250px',left:'15px',boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth:'1350px'}}>
              <Card.Body className="text-start">
                <div className="mb-3" style={{fontSize:'2rem'}}>🔧</div>
                <Card.Title>Seamless Integration</Card.Title>
                <Card.Text style={{ fontSize: '14px',paddingTop:'20px' }}>
                  Our AI employees integrate with your existing tools and workflows.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="border-1" style={{width:'90%',height:'250px',right:'30px',boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth:'1350px'}}>
              <Card.Body className="text-start">
                <div className="mb-3" style={{fontSize:'2rem'}}>📈</div>
                <Card.Title>Measurable Results</Card.Title>
                <Card.Text style={{ fontSize: '14px',paddingTop:'20px' }}>
                  Track performance metrics and ROI in real-time through our dashboard.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <p className="text-center text-muted mt-4" style={{ fontSize: '0.9rem' }}>
          🔒 Your information is secure and will never be shared with third parties
        </p>
      </Container>
    </div>
    </section>
  );
};

export default GenerateAI;
