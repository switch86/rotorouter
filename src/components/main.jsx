export default function Main() {
    return (
          <main id="index">
            <div>
                <h1>Bodywork by Angel J Sanchez</h1>
                <h2>Massage - Lymph Drainage - Reiki</h2>
                <a href="https://booksy.com/en-us/instant-experiences/widget/600324?instant_experiences_enabled=true&amp;ig_ix=true"><button className="button-5" role="button">Book Online</button></a>
            </div>
            <section className="about-me">
                <div className="headshot">
                    <img src="images/headshot.png" alt="image of Angel smiling" id="head-shot"></img>
                </div>
                <div id="meet-angel">
                {/* <!-- <img src="#" alt="pineapple"> --> */}
                    <h1>Meet Angel</h1>
                    <p>Since I was young I always had a deep sense of empathy and care for others. I dove right into Massage thinking it was the best source of healing. Then I discovered there are more ways to heal that go beyond skin deep. Reiki, Pilates and Massage combined has helped me understand the body as a whole and for that I want to offer my knowledge to help bring a little bit of awareness to my client's body.</p>
                        <div>
                            <a href="./about.html"><button className="button-5" role="button">Read More</button></a>
                        </div>
                </div>
            </section>
            <section id="specialties">
    {/* <!-- <img src="images/plant.png" alt="plant"> --> */}
                <h1>Specialties</h1>
                    <ul>
                        <li>Post Surgery Lymph Drainage</li>
                        <li>Ease of Joint Movement through exercise and bodywork</li>
                        <li>Oncology Massage and Lymph Treatment</li>
                        <li>Creating Body Awareness in session planning for all modalities</li>
                        <li>Pre-Natal and Post-Natal Massage</li>
                        <li>Stress relief, Energy Balance and grounding</li>
                    </ul>
            </section>
            <section id="image-bar">
                <img className="image-bar" src="images/crystal.png" alt="crystal"></img>
                <img className="image-bar"src="images/hand.png" alt="hand"></img>
                <img className="image-bar" src="images/crystals.png" alt="crystals"></img>
            </section>
            <section id="covid">
                <h1>COVID Precautions:</h1>
                <p>Mask is worn by Therapist at all times, frequent  bi-weekly testing to ensure all clients safety. Requests Clients to wear a Mask during Massage as there are immune compromised folks sharing the space. Sessions are spaced out for enough air flow, filtering and is santized heavily.</p>
            </section>
            <section id="pricing">
                <div id="massage-price">
                <h1>Massage | Lymph Pricing</h1>
                <ul>
                        <li>30 minutes: $80</li>
                        <li>60 minutes: $125</li>
                        <li>90 minutes: $170</li>
                        <li>120 minutes: $215</li>
                </ul>
                </div>
                <div id="reiki-price">
                    <h1>Reiki Pricing</h1>
                    <ul>
                        <li>30 minutes: $65</li>
                        <li>45 minutes: $80</li>
                        <li>60 minutes: $100</li>
                        <li>90 minutes: $135</li>
                    </ul>
                </div>
            </section>
            <section id="subscription">
                <img className="plant-image" src="images/plant.png" alt="plant"></img>
                <div>
                    <h1>Month to Month Subscription</h1>
                    <span><b>$105</b> for 60 min <b>Massage or Lymph</b></span>
                    <span><b>$150</b> for 90 min <b>Massage or Lymph</b></span>
                    <button className="button-5" role="button">Book Online</button>
                    <p>This option is great for saving and sharing!</p>
                </div>
                <img className="plant-image" src="images/plant.png" alt="plant"></img>
            </section>
            <section id="packages">
                <div>
                    <h1>Package of 4</h1>
                    <h2>$440 for 4</h2>
                    <span>Massage & Lymph: $110 per 60 min</span>
                    <h2>$340 for 4</h2>
                    <span>Reiki: $85 per 60 min</span>
                    <p>This option works best for short term commitment without losing the savings!</p>
                </div>
            </section>  
                        </main>
       
    )
}