import React from 'react'
import Footer from '../components/footer2'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>

                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="/Clients">Clients</Footer.Link>
                    <Footer.Link href="/Conatct">Conatct</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
               
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            

            <Footer.Column>
               <Footer.Title>Contact Us</Footer.Title>
               <Footer.Link href = "mailto: Tark.sosain@yahoo.com" className="fa fa-envelope" aria-hidden="true"    > E-Mail: tareq.sosain@engineer.com</Footer.Link>
                   <Footer.Link href = "mailto: Tark.sosain@yahoo.com" className="fa fa-envelope" aria-hidden="true"    > E-Mail: tareq.sosain@engineer.com</Footer.Link>
                   <Footer.Link href = "mailto: Tark.sosain@yahoo.com" className="fa fa-envelope" aria-hidden="true"    > E-Mail: tareq.sosain@engineer.com</Footer.Link>
                   <Footer.Link href = "mailto: Tark.sosain@yahoo.com" className="fa fa-envelope" aria-hidden="true"    > E-Mail: tareq.sosain@engineer.com</Footer.Link>
               </Footer.Column>
               </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}