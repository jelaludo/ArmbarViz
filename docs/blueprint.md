# **App Name**: Armbar Analyzer

## Core Features:

- Arm Model Simulation: Simulate a simplified arm model with joints and bones using HTML Canvas or SVG.
- Physics Visualization: Represent force application with a vector, torque as a curved arrow, and an efficiency meter using color gradients.
- Interactive Controls & Data Display: Allow users to adjust force application point, magnitude, angle, and fulcrum position via sliders and toggles. Update torque calculations in real-time based on these adjustments. Display all relevant data (torque, distance, force, efficiency) on screen.
- Visual Feedback System: Provide visual feedback on arm position, highlight the elbow joint's stress level, and include a 'danger zone' indicator when torque exceeds a set threshold.
- Physics Engine & Calculations: Calculate torque, efficiency, and other physics values based on user inputs. Display formulas used for calculations and key principles.

## Style Guidelines:

- Primary colors: Use the specified colors for the arm model - dark gray for humerus/shoulder, red for the elbow joint, light gray for radius/ulna, and light blue for the hand.
- Efficiency Meter: Implement a color gradient from red (inefficient) to green (optimal) for the efficiency meter.
- Accent color: Use a vibrant orange (#FFA500) for interactive elements like sliders and toggles.
- Minimalist and clean design with intuitive placement of interactive controls and data displays.
- Smooth animations for force application and real-time updates of calculations.
- Use simple and clear icons for interactive controls (e.g., sliders, toggles, reset button).

## Original User Request:
First of all, analyze the prompt, and let's discuss what will be needed on my side to make it work within Firebase.  Do I need any API keys? any set-up?

Create an interactive web-based visualization that demonstrates the physics of torque applied during a Brazilian Jiu-Jitsu armbar submission. This visualization should use simplified geometric shapes to represent the arm anatomy and show how different factors affect the torque applied to the elbow joint.

## Arm Model Specifications

1. Create a simplified arm model with:
   - A small circle (radius ~8px) for the shoulder joint (positioned near the left side of the canvas)
   - A straight line (length ~100px) for the humerus connecting shoulder to elbow
   - A slightly larger circle (radius ~10px) for the elbow joint (the fulcrum point)
   - Two parallel lines (length ~120px) for the radius and ulna bones extending from the elbow
   - A circle (radius ~20px) for the hand at the end of the forearm

2. The arm should have a default position (slightly bent at the elbow, ~160 degrees) 

3. Color-code the different parts:
   - Humerus: dark gray
   - Elbow joint: red (as it's the fulcrum)
   - Radius/ulna: light gray
   - Hand: light blue
   - Shoulder: dark gray

## Physics Visualization Components

1. Force Application:
   - Represent the applied force as a vector (arrow) at the point of contact
   - The vector should show both direction and magnitude
   - Default position should be at the wrist/hand area

2. Torque Representation:
   - Visualize the torque as a curved arrow around the elbow
   - Size/color of the arrow should indicate torque magnitude
   - Include a numerical display of torque in Newton-meters (Nm)

3. Efficiency Meter:
   - Show percentage of potential torque being applied (compared to optimal)
   - Use a color gradient from red (inefficient) to green (optimal)

## Interactive Elements

1. Force Application Slider:
   - Allow adjusting the point of contact along the forearm/hand
   - Range from just past the elbow to the fingertips
   - Show how efficiency decreases as point moves closer to elbow

2. Force Magnitude Slider:
   - Range from 0 to 100N (typical human force application)
   - Update torque calculation in real-time

3. Force Angle Control:
   - Allow changing direction of applied force
   - Show how perpendicular force application maximizes torque

4. Fulcrum Position Toggle:
   - Allow minor adjustments to where the elbow is positioned
   - Demonstrate how changing fulcrum position affects the submission

## Calculations and Physics

1. Torque Calculation:
   - Use the formula: τ = r × F × sin(θ)
   - where r = distance from fulcrum to force application point
   - F = magnitude of force applied
   - θ = angle between radius vector and force vector

2. Efficiency Calculation:
   - Calculate ratio between current torque and maximum possible torque
   - Maximum torque occurs when force is perpendicular to the lever arm
   - Efficiency % = (current torque / maximum possible torque) × 100

3. Realistic Values:
   - Maximum breaking torque for elbow: ~70-90 Nm
   - Typical applied force in BJJ: 40-80 N
   - Optimal lever arm: full length of forearm to wrist (~25-30 cm)

## Visual Feedback

1. Arm Position Feedback:
   - Show slight movement of the arm when force is applied
   - Increase redness of elbow joint as torque approaches dangerous levels

2. Educational Elements:
   - Display formulas used for calculations
   - Show key principles (longer lever = more torque)
   - Include "danger zone" indicator when torque exceeds 70 Nm

3. Data Display:
   - Current torque value (Nm)
   - Distance from fulcrum (cm)
   - Applied force (N)
   - Efficiency percentage

## Technical Specifications

1. Implement using:
   - HTML Canvas or SVG for rendering
   - JavaScript for interactivity and calculations
   - Responsive design to work on different screen sizes

2. User Interface:
   - Clean, minimalist design with intuitive controls
   - Option to reset to default position
   - Compare view showing optimal vs. current application

3. Performance Considerations:
   - Smooth animations for force application
   - Real-time updates of calculations
   - Efficient rendering for mobile devices

## Additional Features (Optional)

1. Comparison Mode:
   - Toggle between different arm positions (straight arm vs. bent arm)
   - Show how elbow angle affects maximum possible torque

2. Expert Tips:
   - Include tooltips with BJJ coaching advice on proper armbar technique
   - Show common mistakes and their impact on torque efficiency

3. Save/Share Feature:
   - Allow saving specific configurations
   - Option to share visualization with custom parameters
  