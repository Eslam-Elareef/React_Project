import { ProfileSkillsSection , ProfileSec , ProfileTitle , ProfileSpan , ProfileList , ProfileItem
, SpanItem , SpanWeb , Skills , SkillsTitle , SkillsSpan , SkillsDesc , SkillsRapper , SpanTitle
    , RapperPers , RapperParent , ParentSpan  } from './style.js'

import React , {useState , useEffect} from 'react';
import axios from 'axios';


function Profile() {

    const [ rappers , setRapper ] = useState([])

    useEffect ( () => {
        axios.get('js/data.json').then( res => { setRapper(res.data.profile) } )
    } , [] )

    const ProfileRapper = rappers.map( (rapperItem) => {
        return (
            <SkillsRapper key={rapperItem.id}>
                <SpanTitle>{rapperItem.course}</SpanTitle>
                <RapperPers>{rapperItem.persentage}</RapperPers>
                <RapperParent>
                    <ParentSpan persent={rapperItem.id}></ParentSpan>
                </RapperParent>
            </SkillsRapper>
        )
    })

    return (
        <ProfileSkillsSection>
            <div className="container">
                <ProfileSec>
                    <ProfileTitle><ProfileSpan>My </ProfileSpan>Profile</ProfileTitle>
                    <ProfileList>
                        <ProfileItem>
                            <SpanItem>Name</SpanItem>
                            Eslam Basssuony
                        </ProfileItem>
                        <ProfileItem>
                            <SpanItem>Birthday</SpanItem>
                            21/9/1996
                        </ProfileItem>
                        <ProfileItem>
                            <SpanItem>Address</SpanItem>
                            Ain shams
                        </ProfileItem>
                        <ProfileItem>
                            <SpanItem>Phone</SpanItem>
                            1111 2222 3333
                        </ProfileItem>
                        <ProfileItem>
                            <SpanItem>Email</SpanItem>
                            elareef96@gmail.com
                        </ProfileItem>
                        <ProfileItem>
                            <SpanItem>Website</SpanItem>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </ProfileSec>
                
                <Skills>
                    <SkillsTitle>Some <SkillsSpan>skills</SkillsSpan></SkillsTitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing eProfileItemt. Quos praesentium blanditiis esse cupiditate, omnis simiProfileItemque.
                    </SkillsDesc>

                    {ProfileRapper}

                    {/* <SkillsRapper>
                        <SpanTitle>Bootstrap</SpanTitle>
                        <RapperPers>100%</RapperPers>
                        <RapperParent>
                            <ParentSpan persent="1"></ParentSpan>
                        </RapperParent>
                    </SkillsRapper>
                    
                    <SkillsRapper>
                        <SpanTitle>CSS3</SpanTitle>
                        <RapperPers>90%</RapperPers>
                        <RapperParent>
                            <ParentSpan persent="2"></ParentSpan>
                        </RapperParent>
                    </SkillsRapper>
                    
                    <SkillsRapper>
                        <SpanTitle>Photoshop</SpanTitle>
                        <RapperPers>80%</RapperPers>
                        <RapperParent>
                            <ParentSpan persent="3"></ParentSpan>
                        </RapperParent>
                    </SkillsRapper> */}
                </Skills>
            </div>
        </ProfileSkillsSection>
    );
}

export default Profile;