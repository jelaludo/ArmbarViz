# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

Interactive web-based visualization that demonstrates the physics of torque applied during a Brazilian Jiu-Jitsu armbar submission

#Assumptions : Category Estimated Force (N) 
Average Human Male 500-1000 
Average Human Female 300-600 
Top Female Athlete 1500-2500 
Top Male Strongman 4000-6000 
Gorilla 8000-12,000

To estimate the torque needed to dislocate an elbow in a BJJ armbar (~50-100 Nm), I assumed:

The elbow’s ulnar collateral ligament and joint capsule fail at 20-30 Nm, with dislocation requiring higher torque. The armbar uses a lever arm of ~0.3-0.4 m (forearm length). Applied force of 1000-2000 N at the elbow, amplified by the attacker’s hip-driven leverage, translates to sufficient torque. Individual joint stability and technique vary, affecting the exact value.
