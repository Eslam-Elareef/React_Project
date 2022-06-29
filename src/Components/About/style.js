/*
    ===============================
            Creative Styles
    ===============================
*/


import styled from 'styled-components';

export const AboutSection = styled.div`
    height: 500px;
    background-image: url('images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    @media (max-width:991px) {
            height: auto;
    }
`
export const AboutInfo = styled.div`
    padding-top: 100px;
    width: 50%;
    float: right;
    
    @media (max-width:991px) {
        width: 100%;
        padding-top: 10px;
        float: none;
    }
`
export const AboutTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin: 10px 0;
`
export const Span = styled.span`
    font-weight: normal
`
export const InfoDir = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-top: 10px;
    margin-bottom: 20px;

    @media (max-width:991px) {
        font-size: 30px;
    }
`
export const InfoDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`
export const Anchor = styled.a`
    text-decoration: none
`


// .creative {
//     height: 500px;
//     background: url('about-bg.jpg');
//     background-size: cover;
//     background-position: center;
//     background-attachment: fixed
// }

// .creative .creative-info {
//     /* padding-top: 100px; */
//     width: 50%;
//     float: right;
// }

// .creative .creative-info .info-title {
//     font-weight: bold;
//     font-size: 50px
// }

// .creative .creative-info .info-title span {
//     font-weight: normal
// }

// .creative .creative-info .info-dir {
//     font-size: 40px;
//     color: #eb5424;
//     margin-bottom: 20px
// }

// .creative .creative-info .info-desc {
//     color: #000;
//     margin-bottom: 15px;
//     line-height: 1.8
// }

// .creative .creative-info .info-desc a {
//     text-decoration: none
// }

/* @media (max-width:991px) {
    .creative {
        height: auto
    }
    .creative .creative-info {
        width: 100%;
        padding-top: 10px;
        float: none
    }
    
    .creative .creative-info .info-dir {
        font-size: 30px
    }
} */
