import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { WorkSection , WorkTitle , Span , WorkPart , Icon , PartTitle , PartLine , PartDesc } from './style.js';


const Work = () => {
  
    const [ works , setWorks ] = useState([])

    useEffect ( () => {
      axios.get('js/data.json').then( res => { setWorks(res.data.works) } )
    } , [] )

    const worksList = works.map( (workItem) => {
        return (
          <WorkPart first={workItem.id} key={workItem.id}>
              <Icon className={workItem.icon_name}></Icon>
              <PartTitle>{workItem.title}</PartTitle>
              <PartLine/>
              <PartDesc>
                {workItem.body}
              </PartDesc>
          </WorkPart>
        )
      })

      return (
        <WorkSection>
            <div className="container">
                <WorkTitle> <Span>My</Span> Work</WorkTitle>

                {worksList}
                
            </div>
        </WorkSection>
    );
  }
    
  
  export default Work;


  // import { Component } from 'react';
  // import { WorkSection , WorkTitle , Span , WorkPart , Icon , PartTitle , PartLine , PartDesc } from './style.js';
  // import axios from 'axios';
  
  // class Work extends Component {
    
  //     state = {
  //       works : []
  //     }
  
  //     componentDidMount () {
  //       axios.get('js/data.json').then( res => { this.setState({ works : res.data.works}) } )
  //     }
  
  //     render() {
  
  //       const {works} = this.state;
  
  //       const worksList = works.map( (workItem) => {
  //         return (
  //           <WorkPart first={workItem.id} key={workItem.id}>
  //               <Icon className={workItem.icon_name}></Icon>
  //               <PartTitle>{workItem.title}</PartTitle>
  //               <PartLine/>
  //               <PartDesc>
  //                 {workItem.body}
  //               </PartDesc>
  //           </WorkPart>
  //         )
  //       })
  
  //       return (
  //         <WorkSection>
  //             <div className="container">
  //                 <WorkTitle> <Span>My</Span> Work</WorkTitle>
  
  //                 {worksList}
  
  //                 {/* <WorkPart first="1">
  //                     <Icon className="icon fa fa-chain fa-2x"></Icon>
  //                     <PartTitle>Mobile Ux</PartTitle>
  //                     <PartLine/>
  //                     <PartDesc>
  //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
  //                     </PartDesc>
  //                 </WorkPart>
                  
                  
  //                 <WorkPart>
  //                     <Icon className="icon fa fa-bolt fa-2x"></Icon>
  //                     <PartTitle>Mobile Ux</PartTitle>
  //                     <PartLine/>
  //                     <PartDesc>
  //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
  //                     </PartDesc>
  //                 </WorkPart>
                  
  //                 <WorkPart>
  //                     <Icon className="icon fa fa-tachometer fa-2x"></Icon>
  //                     <PartTitle>Mobile Ux</PartTitle>
  //                     <PartLine/>
  //                     <PartDesc>
  //                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.
  //                     </PartDesc>
  //                 </WorkPart> */}
                  
  //             </div>
  //         </WorkSection>
  //     );
  //   }
      
  //   }
    
  //   export default Work;

