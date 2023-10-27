import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import axios from 'axios';
const Breaks = () => {
    const userId = localStorage.getItem('userId');
    const currentDate = new Date();
    const dateTime = currentDate.toISOString();
    const [showStart, setShowStart] = useState(true);
    const [showEnd, setShowEnd] = useState(false);

    console.log(dateTime);

    function handleStartBreak() {
        console.log('here sample Start Break:');
        console.log(userId);
        console.log(dateTime);
        console.log('Start');
        console.log('Break Number to be determined');
        setShowStart(false);
        setShowEnd(true);
    }
    function handleEndBreak() {
        console.log('here sample End Break:');
        console.log(userId);
        console.log(dateTime);
        console.log('End');
        console.log('First');
        setShowStart(true);
        setShowEnd(false);

        const configuration = {
            method: 'post',
            url: 'http://localhost:8080/api/v1/breaks/addbreak',
            data: {
                userId:userId,
                dateTime:dateTime,
                type:'End',
                breakType: 'First',
            },
        };

        // make the API call
        axios(configuration)
            .then((result) => {
                alert(result.data.status);
                // window.location.reload(false);
            })
            .catch((error) => {
                alert(error.response.data.status);
            });
    }


    return (
        <>
            <Header />
            <section>
                <div>
                    <span>Take Break</span>
                    {
                        showStart &&
                        <button onClick={handleStartBreak}>Start</button>
                    }

                    {
                        showEnd &&
                        <button onClick={handleEndBreak}>End</button>
                    }

                </div>


            </section>
            <Footer />
        </>
    )
}

export default Breaks;