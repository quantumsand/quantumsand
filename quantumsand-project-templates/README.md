# Quantum Sand Project Templates

Pre-configured sample projects with prefetched dependencies.

These project templates are dual-licensed under the MIT License and Apache License 2.0

This will include:

* C++ with Qt (including Qml)
* Bevy (Rust game engine)
* React (front-end JavaScript library)
* Phoenix (web framework for Elixir)
* [PyTorch](/quantumsand-project-templates/quantumsand-project-templates-pytorch/)
* [TensorFlow](/quantumsand-project-templates/quantumsand-project-templates-tensorflow/)
* [pydicom](/quantumsand-project-templates/quantumsand-project-templates-pydicom/)
* [dicom2nifti](/quantumsand-project-templates/quantumsand-project-templates-dicom2nifti/) (converting DICOM files to NIfTI)
* [NiBabel](/quantumsand-project-templates/quantumsand-project-templates-nibabel/) (access to common medical and neuroimaging file formats)
* [SimpleITK](/quantumsand-project-templates/quantumsand-project-templates-simpleitk/)
* MONAI
* [Matplotlib](/quantumsand-project-templates/quantumsand-project-templates-matplotlib/)
* GNU Radio
* RadiaCode Python Library
* PyCUDA
* [pandas](/quantumsand-project-templates/quantumsand-project-templates-pandas/)
* [GeoPandas](/quantumsand-project-templates/quantumsand-project-templates-geopandas/)
* [SQLAlchemy](/quantumsand-project-templates/quantumsand-project-templates-sqlalchemy/)
* [NumPy](/quantumsand-project-templates/quantumsand-project-templates-numpy/)
* bpy (Blender as a Python module)
* sagemath
* pytest
* tch-rs (Rust bindings for the C++ api of PyTorch)
* [Ultralytics](/quantumsand-project-templates/quantumsand-project-templates-ultralytics/)
* tuitar (A portable guitar training tool & DIY kit)
* iroh-live (Real-time audio and video over iroh QUIC)
* [RDKit](/quantumsand-project-templates/quantumsand-project-templates-rdkit/)
* [scikit-learn](/quantumsand-project-templates/quantumsand-project-templates-scikit-learn/)
* Python Optimal Transport
* PyMC
* [SciPy](/quantumsand-project-templates/quantumsand-project-templates-scipy/)
* [tqdm](/quantumsand-project-templates/quantumsand-project-templates-tqdm/)
* [Pillow](/quantumsand-project-templates/quantumsand-project-templates-pillow/)
* [Requests](/quantumsand-project-templates/quantumsand-project-templates-requests/) (HTTP library)
* Keras 3 (Deep Learning for humans)
* [JAX](/quantumsand-project-templates/quantumsand-project-templates-jax/)
* [Scapy](/quantumsand-project-templates/quantumsand-project-templates-scapy/) (analyze network packets)
* [SymPy](/quantumsand-project-templates/quantumsand-project-templates-sympy/)
* torrust-tracker (modern and feature-rich private BitTorrent tracker)
* rqbit (bittorrent client in Rust)
* Qiskit (for working with quantum computers)
* RustFS (S3-compatible high-performance object storage)
* PyVISA (Python package to control measurement devices and test equipment)
* pySerial (Python serial port access library)
* RuView (real-time spatial intelligence, vital sign monitoring, and presence detection)
* xarray (multi-dimensional arrays, sometimes called tensors)
* [Seaborn](/quantumsand-project-templates/quantumsand-project-templates-seaborn/) (statistical data visualization)
* Statsmodels (statistical modeling and econometrics)
* Jekyll (blog-aware static site generator in Ruby)
* Nx (multi-dimensional arrays and numerical definitions for Elixir)
* EXLA (Google’s XLA, Accelerated Linear Algebra, compiler/backend for Nx)
* Torchx (LibTorch backend for Nx)
* PyO3 (Rust bindings for Python)
* ROOT (processing and scientific analysis of large amounts of data)
* mapnik (pixel-perfect image output with lightning-fast cartographic algorithms)
* [Reqwest](/quantumsand-project-templates/quantumsand-project-templates-reqwest/) (Rust HTTP Client)
* rust-mqtt (Rust native mqtt client)
* [Redis-rs](/quantumsand-project-templates/quantumsand-project-templates-redis-rs/) (client for Redis, Valkey)
* hashlib (cryptographic hash and message digest algorithms)

More to follow.


## Steps to reproduce the dependency installation

### Python notebooks and dependencies

* Initialise a new Python project directory;
```bash
uv init --python 3.14
```
* Add Python dependencies;
* PyTorch;
```
uv add torch torchvision torchaudio
```
* TensorFlow;
```
uv add tf-nightly
```
* pydicom;
```
uv add pydicom
```
* Matplotlib;
```
uv add matplotlib
```
* dicom2nifti;
```
uv add dicom2nifti
```
* NiBabel; already installed with dicom2nifti;
```
uv add nibabel
```
* SimpleITK;
```
uv add SimpleITK
```
* pandas;
```
uv add pandas
```
* GeoPandas;
```
uv add geopandas
```
* Ultralytics;
```
uv add ultralytics
```
* RDKit;
```
uv add rdkit
```
* scikit-learn;
```
uv add scikit-learn
```
* SciPy;
```
uv add scipy
```
* tqdm;
```
uv add tqdm
```
* Pillow;
```
uv add pillow
```
* Requests;
```
uv add requests
```
* SQLAlchemy and psycopg2;
```
uv add SQLAlchemy psycopg2
```
* JAX;
```
uv add jax
```
* Scapy;
```
uv add scapy
```
* SymPy;
```
uv add sympy
```
* Seaborn;
```
uv add seaborn
```
* Creating a dedicated Jupyter kernel; add dev dependency `ipykernel`;
```bash
uv add --dev ipykernel
```
* Creating a dedicated Jupyter kernel;
```bash
uv run ipython kernel install --user --env VIRTUAL_ENV $(pwd)/.venv --name=quantumsand-project-templates
```
* Start the Jupyter server;
```bash
uv run --with jupyter jupyter lab
```
* Test one of the Python notebooks.
* Google Chrome should have automatically launched.
* If not, you can type this localhost address into the Chrome address bar.
* On the terminal you should see a localhost address like this:
`http://localhost:8888/lab?token=xxx`
* You need to make sure that you copy the entire url including the long `token` after `token=`.
* Paste this url into Chrome.
* You can browse to the `quantumsand-project-templates-pytorch` directory in the File Browser on the left hand side of the web interface.
* Open the `quantumsand-project-template-pytorch-001.ipynb` notebook.
* You are prompted to `Select Kernel`; choose `Python 3 (ipykernel)`; click `Select`.
* Select the first Python cell `import torch`.
* Press the button that looks like a play button `Run this cell and advance`.
* Keep pressing this button to run each Python code cell.
* The cell `torch.__version__`; Should output the following text: `'2.12.0'`
* This is the version number of the PyTorch dependency that we have installed.
* If you are using macOS; run the `macOS only` cell;
```python
if torch.backends.mps.is_available():
    mps_device = torch.device("mps")
    x = torch.ones(1, device=mps_device)
    print (x)
else:
    print ("MPS device not found.")
```
* This should output the following text: `tensor([1.], device='mps:0')`

### Rust notebooks and dependencies

* Install the EvCxR kernel; `cargo install --locked evcxr_jupyter`

You should see the following message:
```
Finished `release` profile [optimized] target(s) in 50.60s
Installing /Users/your-user-name/.cargo/bin/evcxr_jupyter
Installed package `evcxr_jupyter v0.21.1` (executable `evcxr_jupyter`)
```

* Register the kernel with Jupyter; `evcxr_jupyter --install`

You should see the following message:
```
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/kernel.json
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/logo-32x32.png
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/logo-64x64.png
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/logo-LICENSE.md
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/kernel.js
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/lint.js
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/lint.css
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/lint-LICENSE
Writing /Users/your-user-name/Library/Jupyter/kernels/rust/version.txt
Installation complete
```

### Ruby notebooks and dependencies

TODO.

### Elixir/Erlang Livebook notebooks and dependencies

TODO.

More to follow...
