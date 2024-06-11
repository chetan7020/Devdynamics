
# Publisher Subscriber Notification System
- **Postman Link**: [postman](https://www.postman.com/material-geoscientist-56697194/workspace/devdynamics/collection/29632008-20950634-1f30-49f4-a379-bd762cbd092e?action=share&creator=29632008)

## Details

- **Name**: Chetan Patil
- **Codechef (4*)**: [volder_mort](https://www.codechef.com/users/volder_mort)
- **Codeforces (Specialist)**: [chetan7020](https://codeforces.com/profile/chetan7020)

## Introduction

This project implements a Publisher-Subscriber (PubSub) notification system, allowing users to subscribe to topics, receive notifications, and manage their subscriptions efficiently. It provides a seamless communication mechanism for broadcasting updates to subscribers interested in specific topics.

## Features

1. **Subscription Management**:
   - Users can subscribe to topics of interest by providing the topic ID and their subscriber ID.
   - Subscribers can unsubscribe from topics they no longer wish to receive notifications for.

2. **Notification Broadcasting**:
   - The system allows publishers to notify all subscribers of updates to a specific topic.
   - Subscribers receive notifications containing relevant information about the topic updates.

3. **Error Handling**:
   - Proper error handling mechanisms are implemented to ensure smooth operation even in unexpected scenarios.
   - Users receive informative error messages when encountering issues with subscription or notification processes.

4. **Rate Limiting**:
   - Rate limiting functionality is integrated to prevent abuse and ensure fair usage of the system.
   - Users are limited in the frequency of subscription and notification requests they can make within a specified time period.

5. **Logging**:
   - Comprehensive logging is implemented to track system activities and monitor performance.
   - Logs provide insights into subscriber interactions, notification deliveries, and error occurrences.

6. **Caching**:
   - Caching mechanisms are employed to optimize system performance and reduce redundant database queries.
   - Cached data helps improve response times and enhances overall user experience.

7. **Concurrency Control**:
   - Concurrency control techniques are applied to manage simultaneous requests and prevent data inconsistency issues.
   - Proper synchronization mechanisms ensure data integrity and reliable operation under concurrent access scenarios.

## Usage

To utilize the PubSub notification system, follow these steps:

1. **Subscription**:
   - Send a POST request to `/api/subscribe` with the `topicId` and `subscriberId` in the request body to subscribe to a topic.

2. **Unsubscription**:
   - Send a DELETE request to `/api/unsubscribe/:topicId/:subscriberId` with the relevant parameters in the URL path to unsubscribe from a topic.

3. **Notification**:
   - Send a GET request to `/api/notify/:topicId` with the desired `topicId` in the URL path to notify subscribers of updates to a topic.
