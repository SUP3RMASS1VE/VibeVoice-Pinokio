# VibeVoice Pinokio Launcher

A 1-click [Pinokio](https://pinokio.co) launcher for [VibeVoiceTTS](https://github.com/SUP3RMASS1VE/VibeVoiceTTS), a Gradio front end for Microsoft's [VibeVoice](https://github.com/microsoft/VibeVoice). VibeVoice is a frontier open-source text-to-speech model that generates long-form, multi-speaker speech.

## What it installs

- Clones the app into `app/`.
- Creates a Python 3.10 virtual environment at `app/venv` (needed by the prebuilt flash-attention wheels).
- Installs PyTorch for your platform via `torch.js`:
  - NVIDIA (Windows/Linux): torch 2.7.0 + CUDA 12.8, flash-attention 2, triton
  - AMD, macOS, CPU: the matching torch build (flash-attention not available; the app falls back to SDPA)
- Installs the app (`uv pip install -e .`).

An NVIDIA GPU is strongly recommended. Other platforms run on CPU.

## Usage

1. **Install**: click *Install* and wait for it to finish.
2. **Start**: click *Start*. When the server is up, *Open Web UI* appears.
3. Download a model from the web UI. Models are saved in `app/demo/models`.
4. Enter a script, pick voices, and generate speech.

Other menu items:

- **Update**: pulls the latest launcher scripts and app code.
- **Reset**: deletes `app/venv` only. The app code and downloaded models are kept; run *Install* again to rebuild the environment.

## API

The app turns off Gradio's API page (`show_api=False`), so it has no documented programmatic API. Gradio endpoints can still be called with [`gradio_client`](https://www.gradio.app/guides/getting-started-with-the-python-client), but their names and arguments are internal and may change between app versions.
