import React from 'react';
import "./Forum.css";

function Forum(){
    React.useEffect(() => {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
      });
    

    return(
        <> 
        <h1 class="test">Individual Testimonies</h1>
        <body class="boody">   
        <div class="container1">
        <div class="card1">
            <div class="face face1">
                <div class="content1">
                    <h3>Damond Barnes</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content1">
                    <p>My journey began after I was diagnosed with diabetes 7 years ago. I tore my rotator cuff working out incorrectly and the diabetes kept it from healing. I wasn't going to let the injury and my health keep me down. I switched my workouts to ones that accomodate my state. Working out saved me physically but most importantly mentally.</p>
                        
                </div>
            </div>
        </div>
        <div class="card1">
            <div class="face face1">
                <div class="content1">
                    <h3>Linda Mackenzie</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content1">
                    <p>At the age of 52, some would say it's too late to work out or go to the gym. I was having some serious health issues when I knew I needed to do something drastic. I got in touch with Simon and Pep Morinho. Both worked wonders to help me get my life back on track. My nutrition was completely revamped. I began to enjoy working out.</p>
                        
                </div>
            </div>
        </div>
        <div class="card1">
            <div class="face face1">
                <div class="content1">
                    <h3>Mikel Arteta</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content1">
                    <p>I always felt like something was off with my body. I never trully grasped the potentiel one has to build his body the way he wants. I had enough of being lazy and decided to give it a shot and i have to say I've addicted ever since. The people you meet, the experiences you go through trully makes it a wonderful journey. Always Trust the Process!</p>
                        
                </div>
            </div>
        </div>
    </div>
    </body>

    <body class="oody">
        <div class="container-fluid">
            <br/>
            <h2>Frequently Asked Questions (FAQ)</h2>
            <br/>
<button class="collapsible">“DO I NEED TO WORK OUT EVERY DAY?”</button>
<div class="content2">
  <p>No, you do not need to work out every day. In fact, in most cases, I would recommend at least 1-2 days of total rest a week. However, just because you have a rest or recovery day scheduled into your calendar, doesn’t necessarily mean you aren’t active at all on these days. Light, regular movement such as walking your dog around the block, or taking time for stretching or foam rolling are great recovery techniques to help increase blood flow and reduce tension in tight muscles. Participating in regular rest days and practicing a well-balanced recovery routine can help you reduce your risk for injury and promote the longevity of your fitness routine.</p>
</div>
<button class="collapsible">“HOW LONG DOES IT TAKE TO SEE RESULTS?”</button>
<div class="content2">
  <p>It can take anywhere from 6-8 weeks or more to see results from your program. That can be discouraging as so many of us are living in an instant world - we expect results and changes instantaneously. Don’t get discouraged. Know that your hard work is paying off, even if you don’t see the results you’re looking for on the scale right away.

A few other ways to track your progress as you go can be the fit of your clothing, being able to complete more challenging or longer workouts, or taking progress photos and comparing as you continue your journey. It’s all of the little wins along the way that help keep you going, so keep cueing into your body and all of the smaller successes and changes you see along the way and celebrate them!</p>
</div>
<button class="collapsible">“IS WORKING OUT IN THE MORNING BETTER FOR YOU?”</button>
<div class="content2">
  <p>You should exercise at a time that suits you and your body. There’s no evidence to suggest that an early morning workout is better for you, but some people are just more efficient at this time. You’ll get results regardless of the time of day, as long as it works for you.</p>
</div>
<button class="collapsible">“WHAT’S THE BEST DIET FOR MY FITNESS GOALS?”</button>
<div class="content2">
  <p>Your diet plays a huge role in the overall success of your new routine. Regardless of your goals, it’s important to give your body the fuel and energy it needs to crush and recover from your workouts. There are tons of diets out there, and really when it comes down to it, the choice is personal. If I can give a general piece of advice, it would be to simply focus on including more whole foods in your diet. If you want to show up for your workout and perform your best, the nutrients you're filling your body with matter. The quality and content of what you eat make a difference, so try maximizing fresh foods where you can.</p>
</div>
<button class="collapsible">“HOW DO I GET A SIX-PACK?”</button>
<div class="content2">
  <p>Doing 100 sit-ups a day won’t guarantee a defined set of abs; you’ll need to do a combination of things. Reducing body fat should be first on the agenda – you may have the strongest set of abdominal muscles but if your body fat percentage is too high, you won’t be able to see them.<br/>
<br/>
Be sure to include some fat-burning HIIT training and cardio in your routine. However, diet is arguably the most important factor if you want to get lean. Use apps such as My Fitness Pal to track your calorie intake and if weight loss is your goal, ensure you are in a calorie deficit (burning more calories than you eat).
<br/><br/>
When you’ve reached your body fat goals, it’s time to target the abdominals and increase their muscle mass through your training. Great core exercises include plank variations, bicycle crunches and cable rotations, or try abs-specific classes at the gym.</p>
</div>
        </div>
        <br/><br/>
    </body>
    
    
        </>
    )
}

export default Forum;