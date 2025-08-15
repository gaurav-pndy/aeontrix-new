import React from 'react';
import { Container, Row, Col, Card, ProgressBar, Table } from 'react-bootstrap';
import { FaChartLine, FaBullseye, FaCoins } from 'react-icons/fa';

const BusinessImpactSection = () => {
  return (
    <section id="business" className="section content-section py-5">
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
        <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', maxWidth:'1350px' }}>
          <h2 className="text-center mb-3">The Business Impacts of AI</h2>
          <p className="text-center mb-5">Transforming operations with unprecedented efficiency, productivity and cost-effectiveness</p>
          
          
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm" style={{ 
                minHeight: '400px', 
                borderRadius: '15px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Card.Body className="text-center d-flex flex-column">
                  <div className="mb-3"><br />
                    <FaChartLine size={50} color="black" />
                  </div>
                  <Card.Title>Revenue Growth</Card.Title>
                  <Card.Text style={{ color: '#6c757d', flexGrow: 1 }}>
                    AI-driven insights and automation have helped our clients achieve an average of 40% revenue growth within the first year of implementation.
                  </Card.Text>
                  <div style={{ 
                    borderTop: '2px solid #dee2e6', 
                    margin: '20px 30px', 
                    width: '80%', 
                    alignSelf: 'center' 
                  }}></div>
                  <div className="mt-auto">
                    <ProgressBar now={85} className="mb-2" variant="dark" style={{ height: '8px' }} />
                    <small className="text-muted">85% improvement in revenue tracking</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm" style={{ 
                minHeight: '400px', 
                borderRadius: '15px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Card.Body className="text-center d-flex flex-column">
                  <div className="mb-3"><br />
                    <FaBullseye size={50} color="black" />
                  </div>
                  <Card.Title>Operational Efficiency</Card.Title>
                  <Card.Text style={{ color: '#6c757d', flexGrow: 1 }}>
                    Streamlined processes through AI automation resulting in 60% reduction in operational costs and 50% faster delivery times.
                  </Card.Text>
                  <div style={{ 
                    borderTop: '2px solid #dee2e6', 
                    margin: '20px 30px', 
                    width: '80%', 
                    alignSelf: 'center' 
                  }}></div>
                  <div className="mt-auto">
                    <ProgressBar now={75} className="mb-2" variant="dark" style={{ height: '8px' }} />
                    <small className="text-muted">75% increase in efficiency</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm" style={{ 
                minHeight: '400px', 
                borderRadius: '15px',
                backgroundColor: '#f5f5f5',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}>
                <Card.Body className="text-center d-flex flex-column">
                  <div className="mb-3"><br />
                    <FaCoins size={50} color="black" />
                  </div>
                  <Card.Title>Cost Savings</Card.Title>
                  <Card.Text style={{ color: '#6c757d', flexGrow: 1 }}>
                    Intelligent automation and predictive analytics have delivered significant cost savings while improving overall business performance.
                  </Card.Text>
                  <div style={{ 
                    borderTop: '2px solid #dee2e6', 
                    margin: '20px 30px', 
                    width: '80%', 
                    alignSelf: 'center' 
                  }}></div>
                  <div className="mt-auto">
                    <ProgressBar now={90} className="mb-2" variant="danger" style={{ height: '8px' }} />
                    <small className="text-muted">90% reduction in manual processes</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
        <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',maxWidth:'1350px' }}>
          <h3 className="mb-4">Employee Performance Comparison</h3><br></br>
          <div className="d-flex justify-content-center">
            <Table className="text-center" style={{ color: 'black', width: '100%', maxWidth: '1700px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #dee2e6' }}>
                  <th className="text-center py-6" style={{ width: '25%', color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '18px', paddingTop: '10px', paddingBottom: '10px' }}>Metric</th>
                  <th className="text-center py-6" style={{ width: '25%', color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '18px', paddingTop: '10px', paddingBottom: '10px' }}>Human Employees</th>
                  <th className="text-center py-6" style={{ width: '25%', color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '18px', paddingTop: '10px', paddingBottom: '10px' }}>AI Employees</th>
                  <th className="text-center py-6" style={{ width: '25%', color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '18px', paddingTop: '10px', paddingBottom: '10px' }}>Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>Working Hours</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>40 hours/week</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>168 hours/week</td>
                  <td className="py-6 align-middle text-success fw-bold" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>+320%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>Response Time</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>24 hours</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>0.5 seconds</td>
                  <td className="py-6 align-middle text-success fw-bold" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>+172,800%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>Annual Cost</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>$85,000</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>$12,000</td>
                  <td className="py-6 align-middle text-danger fw-bold" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>-86%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>Error Rate</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>4.2%</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>0.01%</td>
                  <td className="py-6 align-middle text-success fw-bold" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>-99.8%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>Sick Days</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>8-12 days/year</td>
                  <td className="py-6 align-middle" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>0 days/year</td>
                  <td className="py-6 align-middle text-success fw-bold" style={{ color: 'black', borderBottom: '2px solid #dee2e6', fontSize: '17px', paddingTop: '10px', paddingBottom: '10px' }}>-100%</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default BusinessImpactSection; 