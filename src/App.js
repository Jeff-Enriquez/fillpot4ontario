import React from 'react';
import './App.css';

function App() {
  return (
    <main>
      <div className='shadow'>
        <img src='electFillpotFamPhoto.jpg' />
      </div>
      <section className='about'>
        <div>
          <p className='endorsed'>Endorsed by Councilmember <a href='https://www.ontarioca.gov/public-officials/ruben-valencia'>Ruben Valencia</a></p>
          <p>I am a Southern California native, and a resident of this city for nearly a decade.  I am a husband, and a proud father to 3 school aged children. I am a First Responder with almost a decade of experience with multiple commendations from supervisors and members of the community where I serve. Because I am an honest man of integrity, I believe in always doing the right thing, even when no one is watching.</p>
        </div>
      </section>
      <section className='experience'>
        <div>
          <h2>Financial & Life Experiences</h2>
          <div className='experienceContentContainer'>
            <ul>
              <li>Over 15 years of managing finances in both the private and public sector</li>
              <li>Fallen Officer Memorial Fund Manager</li>
              <li>Fiscal coordinator for COVID Response</li>
              <li>Fiscal ingenuity</li>
              <li>Financial responsibility</li>
            </ul>
            <img className='fillpotImg' src='fillpot.png'/>
          </div>
        </div>
      </section>
      <section className='believe'>
        <div>
          <h2>I Believe</h2>
          <p>Every person should be informed and involved in their community and their government, especially on the local level.  It is time for the City of Ontario to elect a Treasurer with a new perspective and fresh ideas on how our city invests its financial assets and supports businesses and residents.</p>
        </div>
      </section>
      <section>
        <p>With your vote, we can stand together and help the city of Ontario continue to grow financially.  We can continue to make this city a place that supports its businesses and its residents.  We can keep Ontario strong!</p>
      </section>
    </main>
  );
}

export default App;
