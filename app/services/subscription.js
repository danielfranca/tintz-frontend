// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service
import axios from 'axios';

const SUBSCRIBE_ENDPOINT = 'http://localhost:8000';


class SubscriptionService {
    async subscribe(email) {
        console.log("SubscriptionService:subscribe - begin");
        const url = `${SUBSCRIBE_ENDPOINT}/api/v1/newsletter/subscribers/`;
        var isSubscribed = false;
        console.log("SubscriptionService:subscribe - fetching url");
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
              email: email
          }),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        });

        console.log("SubscriptionService:subscribe - got a reply");

        if (!response.ok) {
          console.log("SubscriptionService:subscribe - it's an error", response.status);
          return [false, response];
        } else {
            console.log("SubscriptionService:subscribe - it's not an error", response.status);
            return [true, response];
        }
    }
}

export default new SubscriptionService();
