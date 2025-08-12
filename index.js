    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', { 
            frameWidth: 32, frameHeight: 48 }
        );
    }

    function create ()
    {
        this.add.image(400, 300, 'sky');
        this.add.image(100, 300, 'star');
        this.add.image(200, 300, 'star');
        this.add.image(300, 300, 'star');
        this.add.image(400, 300, 'star');
        this.add.image(500, 300, 'star');
        this.add.image(600, 300, 'star');
        this.add.image(700, 300, 'star');
        this.add.image(400, 100, 'star');
        this.add.image(400, 150, 'star');
        this.add.image(400, 200, 'star');
        this.add.image(400, 250, 'star');
        this.add.image(400, 350, 'star');
        this.add.image(400, 400, 'star');
        this.add.image(400, 450, 'star');
        this.add.image(400, 500, 'star');
        this.add.image(400, 550, 'star');
    }

    function update ()
    {
    }