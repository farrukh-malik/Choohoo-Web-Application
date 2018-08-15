        import React, { Component } from 'react';
        import styled from 'styled-components';
        import Header from './Header'
        import Logo from '../assets/choohooLogo.png'
        import Footer from './Footer'
        const Div = styled.div`
        background-color:#ECECEC;
        background-position : center center;
        background-repeat : no-repeat;
        background-attachment : fixed;
        backgound-size : cover;
        vertical-align : baseline ;
        margin:-0.8%;
        margin-top:-1%
        @media(max-width:455px){
        }
        `
        const Container = styled.div`
        min-height:500vh;
        width:80%;
        margin-right:auto;
        margin-left:auto
        @media(max-width:455px){
        width:100%;
        }
        `
        const Heading = styled.p`
        color:#006053;
        font-weight:bold;
        font-size:20px;
        font-family:Helvetica;
        `
        const Heading1 = styled.p`
        color:#006053;
        font-weight:bold;
        font-size:18px;
        font-family:Helvetica;
        `
        const H1 = styled.h2`
        font-stretch:extra-condensed;
        line-height:8px;
        color:#006053;
        font-size:20;
        font-weight:bold;
        font-family:Helvetica;
        text-align:center
        `

        const P = styled.p`
        color:#006053;
        font-family:Helvetica;
        font-size:20px
        @media(max-width:455px){
        font-size:14

        }
        `
        const P1 = styled.p`
        color:#006053;
        font-family:Helvetica;
        font-size:18px
        @media(max-width:455px){
        font-size:14

        }
        `
        const Ul = styled.ul`
        font-size:16px;
        padding:0px;
        `
        class Legal extends Component {
        render() {
        return (
        <Div>
        <Header />
        <div style={{ minHeight: "18vh" }}>
        </div>
        <Container>
        <H1>Choohoo Game and Application</H1>
        <H1>Terms and Conditions</H1>
        <div style={{ minHeight: "10vh" }}>
        </div>
        <div style={{ marginRight: "auto", marginLeft: "auto", width: 190 }}>
        <img src={Logo} height={84} width={190} />
        </div>
        <br />
        <br />
        <p
        style={{ color: "#006053", textAlign: "center", fontSize: 20, fontFamily: "Helvetica" }}
        >If yoo find it,it's for yoo hoo</p>
        <p
        style={{ color: "#006053", textAlign: "center", fontSize: 20, fontFamily: "Helvetica" }}
        >August 2017 | Version 1.0</p>

        <Heading>
        1. Introduction
        </Heading>
        <P>
        These terms and conditions regulate the relationship between us (Choohoo - the app provider) and you
        as the app user. We are Choohoo Partnership We have developed this game and application and you
        can use it to crack clues, hunt for the Choohoo object (a	half	moon	object	card) and take a shot at
        winning some great prizes. This license is subject to conditions and you will be liable for breach of this
        licence if you use our software contrary to these terms.
        </P>
        <Heading>
        2. Acceptance
        </Heading>
        <P>
        You agree to these terms by playing, downloading, installing, or running the application. If you do not
        agree to these terms you may not play the game and you may not use the application.
        </P>
        <Heading>
        3. Software application
        </Heading>
        <Heading1>
        3.1. The application
        </Heading1>
        <P1>
        These terms apply to your use of the Choohoo application, which is a game where you crack clues, and
        hunt for prizes in your city or in the virtual world.
        </P1>
        <Heading1>
        3.2. The rules
        </Heading1>
        <P1>
        <li> You choose what you want to hunt for.
        </li>
        <li> You choose where you want to hunt.
        </li>
        <li> There is only one clue per hunt.
        </li>
        <li> To stand a chance of winning a prize, you must send a clear photo of you or your friends holding
        the Choohoo in a cool and fun way with the secret number to the game master for validation.
        </li>
        <li> The game master allocates the prize to the first validated entry.
        </li>
        <li> You are only a valid winner once the game master contacts you with a safe and secret location of
        where to pick up your prize.
        </li>
        <li> You may receive your prize as early as an hour of Choohoo photo validation, depending on the
        type of prize you have won, however this time period is not guaranteed and it can take longer for
        you to receive your prize.
        </li>
        <li> Upon the winner being established, the particular hunt comes to end.
        You may receive points every time you purchase a new clue. You can redeem the points to
        receive cool rewards.
        </li>
        <li> Winners grant permission for us to use their names and photographs in any advertising and
        promotional material for the app. You may ask us to remove your name or refuse to take part in
        any publicity.
        </li>
        <li> You will not receive any payment for using the app, or taking part in any media format related to it.
        </li>
        <li> You cannot ask us to give you another prize of similar value or to pay out the value of the prize.
        <b>We may substitute any prize with another prize of similar value.</b>
        </li>
        <li> The app is in no way sponsored, endorsed or administered by, or associated with, Facebook,
        Twitter or YouTube.
        </li>
        <li> You release Facebook, Twitter and YouTube of all liability for any damage you may suffer. You will
        be giving information to us and not to Facebook, Twitter or YouTube.</li>
        </P1>
        <Heading1>
        3.3. Costs and purchasing of clues
        </Heading1>
        <P1>
        Each clue or Clue Code will cost R50.00 (ZAR50). Clues can be purchased through the app or Clue
        Codes can be purchased at selected stores. We reserve the right to change the costs of purchasing clues
        or purchasing Clue Codes by giving you reasonable notice of any changes.
        </P1>
        <Heading1>
        3.4. Access
        </Heading1>
        <P1>
        For the app to run successfully you must grant us the following:
        </P1>
        <P1>
        <li>
        access to your location while using the app;
        </li>
        <li>
        permission to receive push notifications; and
        </li>
        <li>
        access to your camera.
        </li>
        </P1>
        <Heading1>
        3.5. City or virtual world
        </Heading1>
        <P1>
        Hunts may take place in the virtual world or in any city. Choohoos are everywhere. In order to play in a
        city, you must grant us access to your location to be able to hunt and collect prizes.
        </P1>
        <Heading1>
        3.6. Hullabaloos
        </Heading1>
        <P1>
        Hullabaloos are promotional vouchers that can be claimed and used once available. The vouchers can be
        redeemed at participating stores and on claiming it, you will be given the unique code to use the voucher.
        </P1>
        <Heading>
        4. Duration
        </Heading>
        <Heading1>
        4.1. Commencement
        </Heading1>
        <P1>
        These terms commence whenever you accept them and continue until terminated.
        </P1>
        <Heading>
        5. End User Terms
        </Heading>
        <Heading1>5.1. License</Heading1>
        <P1>
        We grant you a limited non-exclusive license to use this application on these terms. We may cancel your
        license at any time for any reason. Your license is automatically cancelled if you do not get our written
        permission before using this application in a way these terms do not allow. Your right to use our
        application is non-assignable. You may not transfer the right to anyone else.</P1>
        <Heading1>5.2. Your obligations</Heading1>
        <P1>Each authorised user agrees:</P1>
        <P1>
        <li> to create their credentials on request;</li>
        <li> to keep their credentials, secure;</li>
        <li> not to provide access to any person other than an authorised user;</li>
        <li> not to interfere with the functionality or proper working of the service; and</li>
        <li> not to introduce any viruses, worm, logic bomb, trojan, wares, potentially unwanted program (PUP)
        or other malicious software into the service.</li>
        </P1>
        <Heading1>5.3. Security</Heading1>
        <P1>Each authorised user is responsible and liable for activities that occur under their account. You authorise
        us to act on any instruction given by an authorised user, even if it transpires that someone else has
        defrauded both us and you, unless you have notified us in writing prior to us acting on a fraudulent
        instruction. We are not liable for any loss or damage suffered by you attributable to an authorised user’s
        failure to maintain the confidentiality of their credentials.</P1>
        <Heading>
        6. Privacy
        </Heading>
        <P>
        We take the protection of your data very seriously and will always do everything in our power to protect it.
        We process your personal information in terms of our Privacy Policy.
        </P>
        <Heading>
        7. Intellectual property
        </Heading>
        <Heading1>7.1. Retention of rights</Heading1>
        <P1>We own intellectual property rights in our technology and you may not use those rights without our
        permission. You do not acquire any rights in our technology if we use it in our performance under a
        request.</P1>
        <Heading1>7.2. Our technology</Heading1>
        <P1>Our technology is anything that we have or acquire rights in and may use to perform our obligations under
        this agreement.</P1>
        <Heading1>7.3. Trademarks</Heading1>
        <P1>Our trademarks are our property and you may not use them without our permission. All other trademarks
        are their respective owners’ property.</P1>
        <Heading1>7.4. Restrictions</Heading1>
        <P1>You may not change, hire out, reverse engineer, or copy the services without our permission.</P1>
        <Heading1>7.5. Prosecution</Heading1>
        <P1>All violations of proprietary rights or this agreement will be prosecuted to the fullest extent permissible
        under applicable law.</P1>
        <Heading>
        8. Limitation of liability
        </Heading>
        <Heading1>8.1. Direct damages limited</Heading1>
        <P1>To the extent permitted by applicable law, regardless of the form (whether in contract, delict or
        any other legal theory) in which any legal action may be brought, our maximum liability to you for
        direct damages for anything giving rise to any legal action will be an amount equal to the total
        fees already paid by you to us.</P1>
        <Heading1>8.2. Indirect damages excluded</Heading1>
        <P1>To the extent permitted by applicable law, in no event will we (or our personnel) be liable for any
        indirect, incidental, special or consequential damages or losses (whether foreseeable or
        unforeseeable) of any kind arising from this agreement.</P1>
        <Heading1>8.3. We are not liable for your default</Heading1>
        <P1>We are not liable for any damage or loss that your breach, misrepresentation, or mistake causes.</P1>
        <Heading1>8.4. Other goods or services</Heading1>
        <P1>We are not liable for any other deliverable, including website, goods, or service provided by any
        third party.</P1>
        <Heading1>8.5. Indemnity</Heading1>
        <P1>
        You agree to indemnify, defend and hold us (and our personnel) harmless against any and all:
        <li>loss of or damage to any property or injury to or death of any person; and</li>
        <li>loss, damage (including attorneys’ fees on an attorney and own client basis), costs and
        expenses that you may suffer or incur arising directly or indirectly from: (i) any wilful
        misconduct or fraud by us or our personnel; or (ii) a breach by us of your proprietary or
        confidential information, or intellectual property.</li></P1>
        <Heading>
        9. Breach and termination
        </Heading>
        <P>If you breach any of these terms (failure to comply with it) and you fail to comply with it within seven days
        of receiving written notice from us to do so, we may:
        <li>immediately cancel and remove you as a user and close your account; and</li>
        <li>claim damages from you, including any claim for any fees already due.</li></P>
        <Heading>
        10. Termination
        </Heading>
        <Heading1>10.1. Termination for good cause</Heading1>
        <P1>We may immediately terminate this agreement at any time by giving you notice in writing if:
        <li>we discontinue the software or services;</li>
        <li>we believe providing the software or services could create an economic or technical burden or
        material security risk for us;</li>
        <li>termination is necessitated by us having to comply with any applicable law or requests of
        governmental entities.</li></P1>
        <Heading1>10.2. Termination for convenience</Heading1>
        <P1>We may, in our discretion, terminate this agreement, on reasonable written notice to you.</P1>
        <Heading1>10.3. Duties on termination</Heading1>
        <P1>On termination, cancellation, or expiry of this agreement:
        <li>you must uninstall the software from all licensed devices;</li>
        <li>we will stop providing the services; and</li>
        <li>your user account will cease to exist</li></P1>
        <Heading>
        11. Resolving disputes
        </Heading>
        <P>
        There will be a dispute about or from this agreement if a party writes to the other about it and asks for it to
        be resolved under this clause. The parties must refer any dispute to be resolved by arbitration. The
        parties must refer the dispute within 15 business days to arbitration (including any appeal against the
        arbitrator’s decision) under AFSA’s latest rules for expedited arbitrations. The arbitration will be held in 
        English in Johannesburg. The parties will agree and appoint one arbitrator. If the parties cannot agree on
        the arbitrator within 10 business days after the referral, the Secretariat of AFSA will appoint the arbitrator.
        </P>
        <Heading>
        12. Beyond human control
        </Heading>
        <P>
        Neither party is responsible for breach of this agreement caused by circumstances beyond human
        control, but the other party may cancel this agreement on written notice to the other if the circumstances
        persist for more than 60 calendar days
        </P>
        <Heading>
        13. General
        </Heading>
        <Heading1>13.1. Entire agreement</Heading1>
        <P1>This agreement is the entire agreement between the parties related to the relationship between you and
        us.</P1>
        <Heading1>13.2. Changes to the terms</Heading1>
        <P1>We may change the terms at any time and where this affects your rights and obligations, we will notify
        you of any changes by placing a notice in a prominent place on our website or by email. If you do not
        agree with the change you must stop using the software or services. If you continue to use the software
        or services following notification of a change to the terms, the changed terms will apply to you and you
        will be deemed to have accepted such terms.</P1>
        <Heading1>13.3. Changes to any third party software license agreement</Heading1>
        <P1>We will notify you of any changes to any third party software license terms by placing a notice in a
        prominent place on our website or in the software, or notifying you by email. The updated third party
        software license terms will be effective immediately and you will be deemed to have accepted them upon
        notification.</P1>
        <Heading1>13.4. Waiver (giving up of rights)</Heading1>
        <P1>Any favour we may allow you will not affect or substitute any of our rights against you.</P1>
        <Heading1>13.5. Severability</Heading1>
        <P1>If any term is void (invalid), unenforceable, or illegal, the term may be severed (removed) from and will
        not affect the rest of this agreement if it does not change its purpose.</P1>
        <Heading1>13.6. Governing law</Heading1>
        <P1>South African law governs this agreement.</P1>
        <Heading1>13.7. Jurisdiction</Heading1>
        <P1>You consent to the jurisdiction of the South African Magistrate’s Court in respect of any action or
        proceedings that we may bring against you in connection with this agreement, even if the action or
        proceedings would otherwise be beyond its jurisdiction without prejudice to our right to institute any action
        in any other court having jurisdiction.</P1>
        <div style={{minHeight:"50vh"}}></div>
        </Container>
        <Footer />
        </Div>
        )
        }
        }

        export default Legal;
