# Topics
- Vendor lock-in (coupling)
  - Risk reduced by using techniques like hexagonal architecture
  - Think about buy-in rather than lock-in (what deals can we get? How can we leverage this relationship to our advantage?)
- Evolutionary architecture
- Lambda -> OOP analogies
  - Lambda function is a class (blueprint for how to make an instance)
  - Worker instances are like instances of a class
    - Lambda function invocations are run on worker instances
      - Lambdas are executed on bare metal EC2s that Lambda manages for you
- Destinations vs DLQs
  - Destinations also capture error message, response, and stack trace for last invocation (don't have to do extra lookup in logs for some failed payload)
- Lambda scaling before and after re:invent 2023 (now better for bursty traffic)
- How Lambdas work under the hood
  - Firecracker = open source micro-VM tech developed by AWS
    - Underpins both Lambda and Fargate
  - Async vs sync invocation
    - Sync invoke:
      - load balancer -> invoke service -> assignment service -> placement service -> determines which worker to user
        - cold start = assignment service doesn't yet know which worker host to use / needs to have a new one created 
    - Async invoke (compared to sync):
      - goes to the same FE load balancer -> event invoke FE service (not the same thing as the sync invoke service) -> internal SQS queue

# Additional Reading
- [Do modern cloud applications lock you in?](https://www.youtube.com/watch?v=jykSBmnAM2I)
- [Hexagonal architecture: the what, why and when?](https://youtu.be/qGp66Oc3zTg)