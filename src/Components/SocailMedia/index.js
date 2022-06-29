import axios from 'axios';
import { Component } from 'react';
import { SocialMediaSection , Social , Icon , SocialDesc , Span , SpanInfo , } from './style.js'

class SocailMedia extends Component {

  state = {
    social: []
  }

  componentDidMount () {
    axios.get('js/data.json')
    .then( res => { 
      this.setState({social: res.data.social})
    })
  }

    render() {

      const {social} = this.state

      const socialList = social.map( (socialItem) => {
        return (
            <Social item={socialItem.id} key={socialItem.id}>
                <Icon className={socialItem.icon}></Icon>
                <SocialDesc>
                    <Span>{socialItem.title}</Span>
                    <SpanInfo>{socialItem.body}</SpanInfo>
                </SocialDesc>
            </Social>
        )
      })

        return (
          <SocialMediaSection>    
              {socialList}
          </SocialMediaSection>
        )
    }
  }
  
  export default SocailMedia;