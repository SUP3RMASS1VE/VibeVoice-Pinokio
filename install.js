module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/runew0lf/RuinedFooocus app",
        ]
      }
    },
    // Delete this step if your project does not use torch
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",                // Edit this to customize the venv folder path
          path: "app",                // Edit this to customize the path to start the shell from
          // xformers: true   // uncomment this line if your project requires xformers
          // triton: true   // uncomment this line if your project requires triton
          // sageattention: true   // uncomment this line if your project requires sageattention
        }
      }
    },
    // Edit this step with your custom install commands
    {
      method: "shell.run",
      params: {
        venv: "env",                // Edit this to customize the venv folder path
        path: "app",                // Edit this to customize the path to start the shell from
        message: [
          "uv pip install gradio devicetorch"
        ]
      }
    },
    {
      "method": "shell.run",
      "params": {
        "message": [
          "git clone https://github.com/SUP3RMASS1VE/outputs",
        ],
        "path": "app"
      }
    },
    {
      "method": "fs.share",
      "params": {
        "drive": {
          "checkpoints": "app/models/checkpoints",
          "loras": "app/models/loras",
          "upscale_models": "app/models/upscale_models",
          "vae": "app/models/vae",
          "outputs": "app/outputs",
        },
        "peers": [
          "https://github.com/cocktailpeanutlabs/automatic1111.git",
          "https://github.com/cocktailpeanutlabs/fooocus.git",
          "https://github.com/cocktailpeanutlabs/comfyui.git",
          "https://github.com/pinokiofactory/stable-diffusion-webui-forge.git"
        ]
      }
    },
  ]
}
