/*
    ===============================
    Profile + Skills Styles
    ===============================
*/


// { ProfileSkillsSection , Profile , ProfileTitle , ProfileSpan , ProfileList , ProfileItem , SpanItem 
// , SpanWeb , Skills , SkillsTitle , SkillsSpan , SkillsDesc , SkillsRapper , SpanTitle , RapperPers
// , RapperParent , ParentSpan  }


import styled from 'styled-components'

export const ProfileSkillsSection = styled.div`
    padding: 50px 0;
    overflow: hidden;
`
export const ProfileSec = styled.div`
    width: 50%;
    float: left;

    @media (max-width:768px) {
        width: 100%;
        float: none;
        margin-bottom: 20px;
    }
`
export const ProfileTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`
export const ProfileSpan = styled.span`
    font-weight: normal;
`
export const ProfileList = styled.ul`
    list-style: none
`
export const ProfileItem = styled.li`
    margin-bottom: 8px
`
export const SpanItem = styled.span`
    display: inline-block;
    width: 100px;
    font-weight: bold
`
export const SpanWeb = styled.span`
    font-weight: normal;
    color: #eb5424
`
export const Skills = styled.div`
    width: 50%;
    float: left;

    @media (max-width:768px) {
        width: 100%;
        float: none 
    }
`
export const SkillsTitle = styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
`
export const SkillsSpan = styled.span`
    font-weight: normal;
`
export const SkillsDesc = styled.p`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`
export const SkillsRapper = styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
export const SpanTitle = styled.span`
    float: left;
`
export const RapperPers = styled.span`
    float: right;
    margin-right: 100px
`
export const RapperParent = styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
`
export const ParentSpan = styled.span`
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    // width: {props => props.persent === 1 ? '100%' : '0%'};
    // width: {props => props.persent === 2 ? '90%' : '0%'};
    // width: {props => props.persent === 3 ? '80%' : '0%'}
    // width: 100%;
    width: ${ props => ( props.persent === 1 ? '100%' : '0%' || props.persent === 2 ? '90%' : '0%' 
    || props.persent === 3 ? '80%' : '0%') };
`




// done

// .profile_skills {
//     padding: 50px 0;
//     overflow: hidden;
// }

// .profile_skills .profile {
//     width: 50%;
//     float: left;
// }

// .profile_skills .profile .profile-list {
//     list-style: none
// }

// .profile_skills .profile .profile-list .profile-item {
//     margin-bottom: 8px
// }

// .profile_skills .profile .profile-list .profile-item span{
//     display: inline-block;
//     width: 100px;
//     font-weight: bold
// }

// .profile_skills .profile .profile-list .profile-item span.web {
//     font-weight: normal;
//     color: #eb5424
// }

// .profile_skills .skills {
//     width: 50%;
//     float: left;
// }

// .profile_skills .skills .skills-desc {
//     font-size: 15px;
//     color: #888;
//     line-height: 1.5;
//     margin-bottom: 20px
// }

// .profile_skills .skills .bar {
//     overflow: hidden;
//     padding: 10px 0;
//     margin-bottom: 10px
// }

// .profile_skills .skills .bar .title {
//     float: left;
// }

// .profile_skills .skills .bar .perc {
//     float: right;
//     margin-right: 100px
// }

// .profile_skills .skills .bar .parent {
//     height: 2px;
//     clear: both;
//     background: #f8f8f8;
//     position: relative;
//     top: 5px
// }

// .profile_skills .skills .bar .parent span {
//     background: #eb5424;
//     position: absolute;
//     display: block;
//     top: 0;
//     left: 0;
//     bottom: 0
// }

// .profile_skills .skills .bar .parent span.sp1 {
//     width: 100%;
// }

// .profile_skills .skills .bar .parent span.sp2 {
//     width: 90%;
// }

// .profile_skills .skills .bar .parent span.sp3 {
//     width: 80%;
// }

// .profile_skills .profile .profile-title,
// .profile_skills .skills .skills-title{
//     font-size: 40px; 
//     margin-bottom: 20px
// }

// .profile_skills .profile .profile-title span,
// .profile_skills .skills .skills-title span{
//     font-weight: normal;
// }

// @media (max-width:768px) {
//     .profile_skills .profile , 
//     .profile_skills .skills {
//         width: 100%;
//         float: none
//     }
//     .profile_skills .profile {
//         margin-bottom: 20px
//     }
// }
