import React, { Component } from 'react'
import { Container, Header, Button, Icon, Body, Title, Right, Text, Tabs, Tab, Content, List, ListItem, Left, Thumbnail, TabHeading, Fab } from 'native-base'
export default class TestAfter extends Component {
    constructor(props) {
        super(props)
        this.state = {
          active: false
        };
      }
    render() {
        return (
            <Container>
                <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Đề kiểm tra thử</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Tabs>
                    <Tab heading={ <TabHeading><Text>Tổng quan</Text></TabHeading>}>
                        {/* <Tab1 /> */}
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Bảng điểm</Text></TabHeading>}>
                        <Tab2 />
                    </Tab>
                    <Tab heading={ <TabHeading><Text>Thông số câu</Text></TabHeading>}>
                        {/* <Tab3 /> */}
                    </Tab>
                </Tabs>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="md-funnel" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="md-trending-up" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="md-trending-down" />
                    </Button>
                </Fab>
            </Container>
        )
    }
}
export function Tab2(){
    return(
        <Content>
            <List>
                <EachTab2 />
                <EachTab2 />
                <EachTab2 />
                <EachTab2 />
                <EachTab2 />
            </List>
        </Content>
    )
}
export function EachTab2(){
    return(
        <ListItem avatar>
            <Left>
                <Thumbnail small source={require('../assets/images/robot-dev.png')} />
            </Left>
            <Body>
                <Text>Lý Thảo My</Text>
                <Text note>Điểm 9.2 - Thời gian: 30 phút</Text>
            </Body>
            <Right>
                <Icon name='md-refresh'/>
            </Right>
        </ListItem>
    )
}