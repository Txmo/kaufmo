import React from "react";

export default function FAQ() {
    return (
        <div className="faq">
            <h2>Where does the &quot;brands&quot;-data come from?</h2>
            <p>The data is &quot;gathered&quot; from <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/List_of_Nestl%C3%A9_brands">Wikipedia</a></p>

            <h2>How can I be sure that the data is correct?</h2>
            <p>You can not, unless you fact-check it.</p>
            <p>I use Wikipedia as my source, so there is obviously a chance that the data is incorrect.</p>
            <p>If you find something that is not correct, feel free to open a <a rel="noreferrer" target="_blank" href="https://github.com/Txmo/kaufmo/issues">GitHub Issue</a></p>
            <p>More important than telling me is that the Wikipedia page is correct. So please also check if Wikipedia has the data wrong and write a <a rel="noreferrer" target="_blank" href="https://en.wikipedia.org/wiki/Talk:List_of_Nestl%C3%A9_brands">comment</a> or change it yourself.</p>

            <h2>Are these all the Nestlé brands?</h2>
            <p>Unfortunately not.</p>
            <p>As the Wikipedia page states, these brands are only a part of the many more Nestlé-brands.</p>
            <p>
                For example the german page list additional brands and the english page probably also has brands that are missing in the german.
                I do not have tool that compares both pages and spits out differences and i also really do not want to compare them by hand, so for the only source is the english page.
            </p>
            <p>If you know a brand that is missing, please inform or update the Wikipedia, as stated in the answer above.</p>

            <h2>Can you implement feature X and Y?</h2>
            <p>If you have any wishes please open an issue on <a rel="noreferrer" target="_blank" href="https://github.com/Txmo/kaufmo/issues">GitHub</a>.</p>
            <p>I will then check if I like the idea, and if I have time it might get implemented.</p>
            <p>Please do not expect anything to happen in a short amount of time.</p>

            <h2>Can you add brands of company X and Y?</h2>
            <p>I already have the idea to add more &quot;major&quot; brands like CocaCola or Pepsi.</p>
            <p>
                It might also be cool to have the ability to select or deselect certain &quot;lists&quot; of brands.
                For example you could then select Nestlé and Pepsi but deselect CocaCola or someting like that.
                This could also enable &quot;community-lists&quot;, which could be custom made lists that are than put into the GitHub repository and made available to select.
                These could be lists for certain countries or regions.
            </p>
        </div>
    )

}