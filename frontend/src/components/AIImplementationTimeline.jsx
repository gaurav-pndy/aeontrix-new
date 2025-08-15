import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function AIImplementationTimeline() {
  function getStepData(index) {
    const data = [
      {
        title: 'Initial Assessment',
        description: 'Our team analyzes your current workforce and identifies optimal AI replacement opportunities.',
        time: 'Day 1-3'
      },
      {
        title: 'Strategy Development',
        description: 'Custom implementation plan created with detailed ROI projections and transition timeline.',
        time: 'Day 4-7'
      },
      {
        title: 'AI Deployment',
        description: 'Your first AI employees are integrated into your systems and begin performing their functions.',
        time: 'Week 2-3'
      },
      {
        title: 'Full Transition',
        description: 'Complete workforce replacement with ongoing optimization and capability expansion.',
        time: 'Week 4+'
      },
    ];
    return data[index];
  }

  return (
    <section
      id="ai-timeline"
      className="section content-section">
      <div style={{ backgroundColor: '#f5f5f5', padding: '50px 0' }}>
        <Container style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)',maxWidth:'1350px',height:'100%' }}>
          <h3 className="text-center mb-4" style={{marginRight:'700px'}}>AI Implementation Timeline</h3>
         <br></br><br></br>
          {[0, 1, 2, 3].map((index) => {
            const step = getStepData(index);
            const isLeft = index % 2 === 0;

            return (
              <Row key={index} className="align-items-center my-4">
                <Col md={5}>
                  {isLeft && (
                    <div className="text-end" style={{ paddingLeft: '-10%' }}>
                      <div className="d-flex align-items-center justify-content-end mb-2">
                        <div>
                          <h6 className="fw-bold mb-1" style={{ fontSize: '1rem',left: '65px',position:'relative',bottom:'10px' }}>{step.title}</h6>
                        </div>
                      </div>
                      <p className="text-muted" style={{ fontSize: '0.85rem',left: '65px',position:'relative',bottom:'20px'  }}>{step.description}</p>
                    </div>
                  )}
                </Col>

                <Col md={2} className="text-center">
                  <div className="position-relative">
                    <div
                      className="rounded-circle bg-dark text-white fw-bold d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        margin: '0 auto',
                        fontSize: '1rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        border: '3px solid #f5f5f5',
                        zIndex: 2,
                        position: 'relative',
                    
                      }}
                    >
                      {index + 1}
                    </div>
                    {/* Time with calendar icon positioned to the right of circle for left content */}
                    {isLeft && (
                      <div
                        style={{
                          position: 'relative',
                          left: '85px',
                          top: '20px',
                          transform: 'translateY(-100%)',
                          fontSize: '0.8rem',
                          color: '#666',
                          whiteSpace: 'nowrap',
                          paddingLeft:'50px'
                        }}
                      >
                       <h6 className="fw-bold mb-1" style={{ 
                         fontSize: '1rem', 
                         color:'black',
                         textAlign:'left',
                         padding: '20px 12px',
                         borderRadius: '10px',
                         background:'#f5f5f5',
                         width:'370%',
                         marginLeft: '15px',
                         display: 'inline-block'
                       }}>📅 {step.time}</h6> 
                      </div>
                    )}
                    {/* Time with calendar icon positioned to the left of circle for right content */}
                    {!isLeft && (
                      <div
                        style={{
                          position: 'relative',
                          right:'530px',
                          top: '50%',
                          transform: 'translateY(-75%)',
                          fontSize: '0.8rem',
                          color: '#666',
                          whiteSpace: 'nowrap',
                          
                          
                        }}
                      >
                        <h6 className="fw-bold mb-1" style={{ 
                          fontSize: '1rem', 
                          textAlign:'right',
                          color:'black',
                           background:'#f5f5f5',
                          padding: '20px 12px',
                          borderRadius: '10px',
                          display: 'inline-block',
                          width: '300%',
                         
                          
                        }}>{step.time} 📅</h6> 
                      </div>
                    )}
                    {index < 3 && (
                      <div
                        style={{
                          width: '4px',
                          height: '100px',
                          backgroundColor: '#dee2e6',
                          margin: '0 auto',
                          position: 'absolute',
                          left: '50%',
                          top: '40px',
                          transform: 'translateX(-50%)',
                          zIndex: 1
                        }}
                      />
                    )}
                  </div>
                </Col>

                <Col md={5}>
                  {!isLeft && (
                    <div className="text-start" style={{ paddingRight: '-50%' }}>
                      <div className="d-flex align-items-center mb-2">
                        <div>
                          <h6 className="fw-bold mb-1" style={{ fontSize: '1rem',right: '65px',position:'relative',bottom:'10px' }}>{step.title}</h6>
                        </div>
                      </div>
                      <p className="text-muted" style={{ fontSize: '0.85rem',right: '65px',position:'relative',bottom:'20px'  }}>{step.description}</p>
                    </div>
                  )}
                </Col>
              </Row>
            );
          })}

         
        </Container>
      </div>
    </section>
  );
}

export default AIImplementationTimeline;
