import React from "react";
// import { withGoogleMap, GoogleMap} from 'google-maps-react';
// const MyGoogleMapComponent = withGoogleMap(props => (
//     <GoogleMap/>
//   ));

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const MapContainer = () =>{
    return(
        
        <div class="map-container">
            <div class="map-container-loction">
                <div class="map-container-table">
                    <div class="map-container-table-row">
                        <div class="login-3-row-login-email css">
                            <label for="" class="login-3-row-login-email-label">Location</label>
                            <input type="text" class="login-3-row-login-email-input"/>
                        </div>
                        <a href="" class="footer-1-button css">Find My Location</a>
                    </div>

                    <div class="login-3-row-login-email">
                        <label for="" class="login-3-row-login-email-label">Search Radius</label>
                        <input type="text" class="login-3-row-login-email-input"/>
                    </div>

                    <div class="login-3-row-login-email">
                        <label for="" class="login-3-row-login-email-label">Search Mesurement</label>
                        <input type="text" class="login-3-row-login-email-input"/>
                    </div>
                    <div class="login-3-row-login-email">
                        <a href="" class="footer-1-button css">Search</a>
                    </div>
                </div>

                <div class="map-container-google">
                    <div class="map-container-scroll">
                        <div class="map-container-scroll-col">
                            <h3>Text</h3>
                            <p className="pbottomap">Текст (от лат. textus — ткань; сплетение, сочетание) — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.
                                Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.
                                В лингвистике термин «текст» используется в широком значении, включая и образцы устной речи. Восприятие текста изучается в рамках лингвистики текста и психолингвистики. Так, например, И. Р. Гальперин определяет текст следующим образом: «Это письменное сообщение, объективированное в виде письменного документа, состоящее из ряда высказываний, объединённых разными типами лексической, грамматической и логической связи, имеющее определённый моральный характер, прагматическую установку и соответственно литературно обработанное»[1].
                            </p>
                        </div>
                    </div>
                    <div className="map-container-google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12155566.858958283!2d-96.22314543850278!3d39.51816341752782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z0KHQvtC10LTQuNC90LXQvdC90YvQtSDQqNGC0LDRgtGLINCQ0LzQtdGA0LjQutC4!5e0!3m2!1sru!2skz!4v1666280373674!5m2!1sru!2skz" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"/>
                    </div>
                    {/* <div className="map-google1"> 
                        <MyGoogleMapComponent
                            containerElement = {
                                <div style = {{height:'100%', width:'67%'}} />
                            }
                            mapElement = {
                                <div style = {{height:'100%', border: '1px solid black'}} />
                            }
                        />
                    </div> */}
                </div>
            </div>
        </div>

     );
};
    
export default MapContainer;