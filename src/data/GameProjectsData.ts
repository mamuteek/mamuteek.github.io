import ProjectData from '@/data/ProjectData'

export default [
    new ProjectData("ets2", "Euro Truck Simulator 2", "img/projects/logo-ets2.png", `
    <div class="paragraph">
    <strong>Euro Truck Simulator 2</strong> is the benchmark vehicle simulation franchise, powered by SCS Software's proprietary Prism3D engine.
    </div>
    
    <div class="paragraph">
        <strong>My Contributions</strong>
        <ul>
        <li>Core driving dynamics overhaul: truck handling, suspension kinematics, wheel-ground contact mechanics, and powertrain response</li>
        <li>Real-time physics-based movement and collision for pneumatic cables, flags, and trailer curtains</li>
        <li>Low-level physics engine integration and migration from Bullet Physics to NVIDIA PhysX</li>
        </ul>
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/HKpODQGj7ds" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#e80fb7", true, false, "20% 80%"),

    new ProjectData("ats", "American Truck Simulator", "img/projects/logo-ats.png", `
    <div class="paragraph">
    <strong>American Truck Simulator</strong> brings the renowned vehicle simulation experience to the iconic landscapes of the American West.
    </div>
    
    <div class="paragraph">
        <strong>My Contributions</strong>
        <ul>
        <li>Core driving dynamics overhaul: truck handling, suspension kinematics, wheel-ground contact mechanics, and powertrain response</li>
        <li>Real-time physics-based movement and collision for pneumatic cables, flags, and trailer curtains</li>
        <li>Low-level physics engine integration and migration from Bullet Physics to NVIDIA PhysX</li>
        </ul>
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/T4Pd1p8lGtc" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#e48246", true, false, "40% 20%"),

    new ProjectData("tidal-rush", "Tidal Rush", "img/projects/tidalrushThumbnail.png", `
    <div class="paragraph">
    <strong>Tidal Rush</strong> is a competitive watercraft racing title built in Unity.
    </div>
    
    <div class="paragraph">
        <strong>My Contributions</strong>
        <ul>
        <li>Core jetski vehicle physics: dynamic buoyancy, hydrodynamic drag, wake interaction, and wave slicing</li>
        <li>Water tech and shaders: dynamic wave displacement tooling and real-time mesh sampling for physics</li>
        <li>Multiplayer netcode: low-latency networked vehicle synchronization and state prediction</li>
        </ul>
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/jSKHIKLVSsQ" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#23bd69", true, false, "50% 80%"),

    new ProjectData("star-atlas", "Star Atlas", "img/projects/logo-staratlas.png", `
    <div class="paragraph">
    <strong>Star Atlas</strong> is a space exploration MMO built in Unreal Engine 5.
    </div>
    
    <div class="paragraph">
        <strong>My Contributions</strong>
        <ul>
        <li>Vehicle physics & flight models: 6-DOF spaceship flight mechanics and atmospheric hoverbikes</li>
        <li>Gameplay systems: abilities, weapons, mounting, and character customization using UE's GAS framework</li>
        <li>Networked replication: server-authoritative flight prediction and replication for multiplayer</li>
        <li>Planetary worldbuilding tools: procedural tooling for 1:1 planetary-scale terrain</li>
        </ul>
    </div>
    
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/ciFSSd39pAY" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#5a78af", true, false, "0% 20%")
];
