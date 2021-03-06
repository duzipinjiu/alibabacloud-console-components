import React from 'react'
import { Grid } from '@alicloud/console-components'
import './demo10.less'

const { Row, Col } = Grid

const Demo10 = () =>(
  <div className="offset-fixed-demo">
    <div className="demo-title">Normal offset, set offset from 1 to 30</div>
    <Row>
      <Col fixedOffset="0">offset-fixed-0</Col>
    </Row>
    <Row>
      <Col fixedOffset="4">offset-fixed-4</Col>
    </Row>
    <Row>
      <Col fixedOffset="8">offset-fixed-8</Col>
    </Row>
    <Row>
      <Col fixedOffset="12">offset-fixed-12</Col>
    </Row>

    <div className="demo-title">Adaptive offset</div>
    <Row>
      <Col>col</Col>
      <Col fixedOffset="12">offset-fixed-12</Col>
    </Row>
  </div>
)

export default Demo10