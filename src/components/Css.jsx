import React from "react";
// import {useNavigate, useParams} from 'react-router-dom'

function Css () {

    return(
        <><>
            <div className="square-list">
                <div className="square-list">
                    <section id="square1" className="square">
                        .square
                        <p>&#123; <br/>
                            min - width : 250px;<br />
                            width: 270px;<br />
                            height: 270px;<br />
                            padding: 20px;<br />
                            font-weight: bold;<br />&#125;</p>
                        <br />
                        <p>.square::after&#123;<br />&#125;
                            content: "";<br />
                            display: block;<br />
                            padding-bottom: 100%;<br />&#125;</p>
                        <br />
                        <p>  #square1&#123;<br />&#125;
                            background-color:  #F4DFD0;<br />&#125;</p>

                    </section>

                    <section id="square2" className="square">
                        Margin
                        <p>#square2&#123;<br />&#125;
                            background-color: thistle;<br />
                            margin: 10px;<br />
                            width: 250px;<br />
                            height: 250px;<br />
                            &#125;</p>
                    </section>

                    <section id="square3" className="square">
                        Border
                        <p>#square3&#123;<br />&#125;
                            background-color: #7EB5A6;<br />
                            border-style: solid;<br />
                            border-width: 10px;<br />
                            border-color: #B5EAEA;<br />
                            &#125;</p>
                    </section>

                    <section id="square4" className="square">
                        Padding

                        <p>
                            #square4&#123;<br />&#125;
                            background-color: #006A71;<br />
                            padding: 20px;<br />
                            color: thistle;<br />
                            &#125;<br />
                            <br />
                            #square4 p&#123;<br />&#125;
                            color: thistle;<br />
                            &#125;
                        </p>

                    </section>

                    {/* What are the best practices associated with using classNamees vs. ids? */}
                    <section id="square5" className="square">classNamees
                        <p>classNamees can apply the same style a group of elements, you can add more than one className to the element.</p>
                        <p>Use <b>.(Dot)</b> to style className</p>
                        <br />
                        <p><b>square</b> is the className name on this page</p>
                    </section>
                    <section id="square6" className="square">id
                        <p>ID apply on only one single element.<br />
                            Use <b>#</b> to style className</p>
                        <br />
                        <p><b>square1-15</b>Each square have a unique ID</p>
                    </section>

                    <section id="square7" className="square">relative
                        What are the differences between relative, absolute, and fixed positioning?

                        <p> #square7outside&#123;position&#125;: relative;&#125;<br />
                            #square7inside&#123;position&#125;: relative;&#125;<br />
                        </p>
                        <div id="square7outside"></div>
                        <div id="square7inside"></div>
                        <p>(On top, navigation buttons are using relative)</p>
                    </section>

                    <section id="square8" className="square">absolute
                        <p>&#123;position&#125;: absolute;<br />
                            background-color: #758086;<br />
                            width: 110px;<br />
                            height: 110px;&#125;</p>

                        <div id="square8outside"></div>
                        <div id="square8inside"></div>
                    </section>

                    <section id="square9" className="square">fixed position
                        <p>Always stays in the same place even if the page is scrolled, see <span className="highlight"><b>#fix-square</b></span>
                            <div id="fix-square">
                                #fix-square&#123;<br />&#125;
                                position: fixed;<br />
                                background-color: #B5EAEA;<br />
                                margin: 10px;<br />
                                width: 165px;<br />
                                height: 165px;<br />
                                padding: 10px;<br />
                                &#125;</div></p>

                    </section>

                    <section id="square10" className="square sticky-element">.sticky{<p>
                        position: sticky;<br />
                        bottom: 0;<br />
                        background-color: yellow;<br />
                        padding: 50px;<br />
                    </p>}&#125;<br /><br />
                        <p>To see the effect of sticky check out yello banner</p>
                    </section>
                    <div id="square10outside"></div>
                    <div id="square10inside"></div>


                    <section id="square11" className="square">inline
                        {/* < />!--  --> */}

                        <p>
                            What does it mean to display inline vs inline blocks? To displays the element on the same line for example here: <b>p tag </b> in different section still show continuing block
                            <p>
                                <p className="inline-content">#square11</p>
                                <p className="inline-content">p&#123;</p>
                                <p className="inline-content">display: inline;&#125;</p>
                                <p className="inline-content">display: inline;&#125;</p>
                            </p></p>
                    </section>
                    <section id="square12" className="square">inline blocks
                        <p>Alright, let's move on to inline-block. It&#39;s essentially the same thing as inline, except that you can set height and width values.
                            <div id="square12a"></div>
                            <div id="square12b"></div>
                            <div id="square12c"></div>
                        </p>
                    </section>

                    <section id="square13" className="square">circle
                        <p><b>#square13<br /> p&#123;</b><br />
                            position: absolute;<br />
                            top:50%;<br />
                            left: 50%;<br />
                            margin-right: -50%;<br />
                            transform: translate(-50%,-50%)<br />
                            <b>&#125;</b></p></section>
                    <section id="square14" className="square"></section>
                    <section id="square15" className="square">
                        <div className="triangle-right"></div>
                        <p>.triangle-right {<br />}&#125;
                            position: relative;<br />
                            border-top: 60px solid transparent; <br />
                            border-left: 100px solid white;<br />
                            border-bottom: 60px solid transparent;<br />
                            &#125;
                        </p>
                    </section>

                </div>
            </div>
        </><div className="sticky">I will stick to the screen when you reach my scroll position</div></>
     ) 
}
export default Css