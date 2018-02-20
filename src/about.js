// lachlan kosaniuk innes - bigger in japan - biggerjapan@gmail.com

import React from 'react';

export default class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div id='about'>

                    <p id='born'>Born in Oslo - 1977</p>

                    <div className='about-section'>
                        <h4>Education</h4>
                        <p>2004|2006</p>
                        <ul>
                            <li>- Oslo National Academy of the Arts, MA Visual Arts</li>
                        </ul>

                        <p>2001|2004</p>
                        <ul>
                            <li>- Oslo National Academy of the Arts, Bachelor Visual Arts</li>
                        </ul>

                        <p>2000|2001</p>
                        <ul>
                            <li>- Oslo tegne og maleskole</li>
                        </ul>

                        <p>1996|1998</p>
                        <ul>
                            <li>- Oslo tegne og maleskole</li>
                        </ul>
                    </div>

                    <div className='about-section'>
                        <h4>Publications</h4>
                        <ul className='about-ul'>
                            <li>- Interference / Published by Uten Tittel AS - 2017 / ISBN 978-82-93502-10-4</li>
                        </ul>
                    </div>

                    <div className='about-section'>
                        <h4>Bibliography</h4>
                        <ul className='about-ul'>
                            <li>- Gunhild Horgmo / Tankevekkende struktur / TA / 14.03.2013</li>
                            <li>- Leena Kuumola / Det imaginära regnets poesi / Hufvudstadsbladet 2013</li>
                            <li>- Harri Mäcklin / Helsingin Sanomat (Helsinki) / 13.03.2013</li>
                            <li>- NRK Morgennytt 09:00-10:00 / 06.09.2012</li>
                            <li>- Stian Gabrielsen / Kunstkritikk.no / 05.03.2012</li>
                            <li>- 406 - Tokyo & London based Online Magazine / 20.06.2012</li>
                            <li>- Kjetil Røed / Nordhøy setter ny standard / Aftenposten / 05.12.2010</li>
                            <li>- Erling Mostue Bugge / Spor innenfor, bortenfor og parallelt / Numer 86</li>
                            <li>- Arctic Challenge - site specific / Andørja / Harstad Tidene / 11.07.2010</li>
                            <li>- Marit Schulstok / Trosset nei til stein / Varden / 29.06.09</li>
                            <li>- Kjetil Røed / Tegningens mulige konsekvenser / Billedkunst #2/ 2009</li>
                            <li>- Kari J. Brandtzæg / Kryss og tvers / Dagbladet / 08.03.09</li>
                            <li>- André Gali, Billedreportasje / Drawing Consequences/ Galiblog / 03.03.09</li>
                            <li>- Arve Rød / Tegning og tid / Dagens Næringsliv / 28.02.09</li>
                            <li>- Harald Flor / Tegning på vegg, skjerm og i rom / Dagbladet / 06.04.08</li>
                            <li>- Presentasjon i Ut ukt / Performativ tekst / #2-3/ 2008</li>
                            <li>- André Gali, Billedreportasje / Aktuelle utstillinger 3 / www.kunstkritikk.no / 11.09.07</li>
                        </ul>
                    </div>

                    <div className='about-section'>
                        <h4>Grants</h4>

                        <p>2016</p>
                        <ul>
                            <li>- Prosjektstøtte, Billedkunstnernes Vederlagsfond</li>
                        </ul>

                        <p>2015|2017</p>
                        <ul>
                            <li>- Billedkunstnernes Hjelpefond 3 year</li>
                        </ul>

                        <p>2015</p>
                        <ul>
                            <li>- Ingrid Lindbäck Langaards stiftelse</li>
                        </ul>

                        <p>2014</p>
                        <ul>
                            <li>- Billedkunstnernes Vederlagsfond</li>
                        </ul>

                        <p>2013</p>
                        <ul>
                            <li>- Exhibition grant, Art Council Norway</li>
                        </ul>

                        <p>2011|2013</p>
                        <ul>
                            <li>- National grant for artist, 2-years working grant, Norwegian Visual Artists Association</li>
                        </ul>

                        <p>2012</p>
                        <ul>
                            <li>- Ingrid Lindbäck Langaards stiftelse</li>
                        </ul>

                        <p>2010</p>
                        <ul>
                            <li>- National grant for artist, 1-year working grant, Norwegian Visual Artists Association Exhibition grant, Art Council Norway</li>
                        </ul>

                        <p>2009</p>
                        <ul>
                            <li>- Billedkunstnernes Hjelpefond</li>
                        </ul>

                        <p>2008</p>
                        <ul>
                            <li>- Billedkunstnernes Vederlagsfond</li>
                        </ul>

                        <p>2007</p>
                        <ul className='g1'>
                            <li>- Exhibition grant, Art Council Norway</li>
                            <li>- Billedkunstnernes vederlagsfond</li>
                        </ul>

                        <p>2006</p>
                        <ul>
                            <li>- National grant for artist, materials</li>
                        </ul>

                        <p>2001</p>
                        <ul>
                            <li>- Oslo tegne og maleskole, materials grant</li>
                        </ul>
                    </div>

                    <div className='about-section'>
                        <h4>Collections</h4>

                        <ul className='about-ul'>
                            <li>- The Norwegian Bank</li>
                            <li>- Pro Artibus, Helsinki</li>
                            <li>- Ministry of Foreign Affairs (Norway)</li>
                            <li>- The Erling Neby collection</li>
                        </ul>
                    </div>

                    <div className='about-section'>
                        <h4>Commisioned Works</h4>

                        <ul className='about-ul'>
                            <li>- "Kunsten langs veien" på Veitvet, Kulturetaten</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
