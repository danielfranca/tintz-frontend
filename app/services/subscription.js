// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service
import axios from 'axios';

const SUBSCRIBE_ENDPOINT = 'https://localhost:8000';


class SubscriptionService {

  subscribe() {
    const url = `${SUBSCRIBE_ENDPOINT}/api/subscription/subscribe`;
    var isSubscribed = false;
    const response = await fetch(url, {
      method: 'POST',
      data: {
          email: email
      },
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Subscribe failed, HTTP status ${response.status}`);
    }    
    isSubscribed = true;

    return isSubscribed;
  }

}

export default new SubscriptionService();
