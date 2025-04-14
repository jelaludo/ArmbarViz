"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ArmbarAnalyzer = () => {
  const [forcePoint, setForcePoint] = useState(0.8); // Point of contact along the forearm (0 to 1)
  const [forceMagnitude, setForceMagnitude] = useState(50); // Magnitude of applied force (N)
  const [forceAngle, setForceAngle] = useState(90); // Angle of applied force (degrees)
  const [fulcrumPosition, setFulcrumPosition] = useState(0); // Fulcrum position adjustment
  const [torque, setTorque] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  const humerusLength = 100;
  const radiusUlnaLength = 120;

  // Elbow dislocation thresholds (Nm)
  const lowDislocationThreshold = 60;
  const highDislocationThreshold = 90;

  const getForceMagnitudeCategory = (force: number) => {
    if (force >= 8000) return "Gorilla";
    if (force >= 4000) return "Top Male Strongman";
    if (force >= 1500) return "Top Female Athlete";
    if (force >= 500) return "Average Human Male";
    if (force >= 300) return "Average Human Female";
    return "Below Average Human Female";
  };

  const calculateTorque = () => {
    const r = forcePoint * radiusUlnaLength; // distance from fulcrum to force application point
    const forceInRadians = forceAngle * Math.PI / 180;
    const torqueValue = r * forceMagnitude * Math.sin(forceInRadians);
    const maxTorque = radiusUlnaLength * forceMagnitude;
    const efficiencyValue = (torqueValue / maxTorque) * 100;

    setTorque(torqueValue);
    setEfficiency(efficiencyValue);
  };

  useEffect(() => {
    calculateTorque();
  }, [forcePoint, forceMagnitude, forceAngle, fulcrumPosition]);

  return (
    <TooltipProvider>
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-3xl">
        {/* Canvas/SVG Area */}
        <Card className="w-full md:w-1/2">
          <CardContent>
            {/* Placeholder for the arm model visualization */}
            <div className="h-64 bg-gray-100 rounded-md">
              {/* Arm Model Simulation will go here */}
              <p className="text-center py-24">Arm Model Simulation</p>
            </div>
          </CardContent>
        </Card>

        {/* Controls and Data */}
        <Card className="w-full md:w-1/2">
          <CardContent className="flex flex-col gap-4">
            {/* Force Application Slider */}
            <div>
              <Label htmlFor="forcePoint">Force Application Point</Label>
              <Slider
                id="forcePoint"
                defaultValue={[forcePoint * 100]}
                max={100}
                step={1}
                onValueChange={(value) => setForcePoint(value[0] / 100)}
              />
              <Input
                type="number"
                value={forcePoint.toFixed(2)}
                onChange={(e) => setForcePoint(parseFloat(e.target.value))}
              />
            </div>

            {/* Force Magnitude Slider */}
            <div>
              <Label htmlFor="forceMagnitude">Force Magnitude (N)</Label>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    <Slider
                      id="forceMagnitude"
                      defaultValue={[forceMagnitude]}
                      max={8000}
                      step={10}
                      onValueChange={(value) => setForceMagnitude(value[0])}
                    />
                    <Input
                      type="number"
                      value={forceMagnitude}
                      onChange={(e) => setForceMagnitude(parseFloat(e.target.value))}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  Estimated Force: {getForceMagnitudeCategory(forceMagnitude)}
                </TooltipContent>
              </Tooltip>
            </div>

            {/* Force Angle Control */}
            <div>
              <Label htmlFor="forceAngle">Force Angle (degrees)</Label>
              <Slider
                id="forceAngle"
                defaultValue={[forceAngle]}
                max={180}
                step={1}
                onValueChange={(value) => setForceAngle(value[0])}
              />
              <Input
                type="number"
                value={forceAngle}
                onChange={(e) => setForceAngle(parseFloat(e.target.value))}
              />
            </div>

            {/* Fulcrum Position Toggle */}
            <div>
              <Label htmlFor="fulcrumPosition">Fulcrum Position Adjustment</Label>
              <Slider
                id="fulcrumPosition"
                defaultValue={[fulcrumPosition]}
                max={20}
                min={-20}
                step={1}
                onValueChange={(value) => setFulcrumPosition(value[0])}
              />
              <Input
                type="number"
                value={fulcrumPosition}
                onChange={(e) => setFulcrumPosition(parseFloat(e.target.value))}
              />
            </div>

            {/* Data Display */}
            <div>
              <p>Torque: {torque.toFixed(2)} Nm</p>
              <p>Efficiency: {efficiency.toFixed(2)} %</p>
              {torque >= lowDislocationThreshold && (
                <p className="text-red-500">
                  Elbow Dislocation Likely! (Torque exceeds {lowDislocationThreshold} Nm)
                </p>
              )}
              {torque >= highDislocationThreshold && (
                <p className="text-red-700 font-bold">
                  ELBOW DISLOCATION IMMINENT! (Torque exceeds {highDislocationThreshold} Nm)
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default ArmbarAnalyzer;
