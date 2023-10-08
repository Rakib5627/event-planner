

const FAQs = () => {
    return (
        <div className="mt-20">

            <div className="collapse mb-4 bg-my-red  text-my-of-white">
                <input type="radio" name="my-accordion-1" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is Event Management?
                </div>
                <div className="collapse-content">
                    <p>Event management refers to the management of any type of event on behalf of the event host. It includes Meeting, Incentives, Conference, seminar, conventions, concerts, trade shows, festivals, ceremonies. Event management Company involves overall design, logistical support, event execution and the management of the entire event project.</p>
                </div>
            </div>
            <div className="collapse bg-my-red mb-4 text-my-of-white">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    What are the basic phases of event management?
                </div>
                <div className="collapse-content">
                    <p>There are 5 basic phases in event management. Its process of planning an event from start to finish. These are 1. Concept | 2. Coordination | 3. Control | 4. Culmination | 5. Closeout.</p>
                </div>
            </div>
            <div className="collapse bg-my-red mb-4 text-my-of-white">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    Why you should hire a professional event management company?
                </div>
                <div className="collapse-content">
                    <p>A professional event management company can provide the best event solution which is the importance of event management. Here are some key reasons to consider hiring an event management company. 1. Creative thinking, 2. Meet the latest event trend, 3. Detailed planning, 4. Saves time and money, 5. Smooth Execution</p>
                </div>
            </div>
            <div className="collapse bg-my-red mb-4 text-my-of-white">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">
                    What is purpose of event management?
                </div>
                <div className="collapse-content">
                    <p>The purpose of Event Management can be different for every business, organization, or personal needs. But one thing is can be said for sure, Anyone who is planning for event management wants to promote or showcase something that he has.</p>
                </div>
            </div>
            

        </div>
    );
};

export default FAQs;