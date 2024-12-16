# Dense RAG Q&A Project

## Prerequisites

- Python 3.10.15
- pip

## Setup and Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <repository-name>
```

### 2. Project Structure

Create the following directories in the `dense_rag_qna/main` directory:

```
dense_rag_qna/main/
├── cache/
├── chat_history/
└── documents/
```

### 3. Environment Configuration

1. Navigate to the `dense_rag_qna/main/utils` directory
2. Add the `.env` file with your project-specific environment variables

### 4. Install Dependencies

In the project root directory, run:

```bash
pip install -r requirements.txt
```

### 5. Generating Weights for Model

Navigate to the project directory and run:

```bash
cd dense_rag_qna/main
python weights.py
```

### 6. Database Migration

Navigate to the project directory and run:

```bash
cd dense_rag_qna/
python manage.py migrate
```

### 7. Run the Development Server

```bash
python manage.py runserver
```

The server will start, typically at `http://127.0.0.1:8000/`

## Troubleshooting

- Ensure all dependencies are correctly installed
- Check that the `.env` file is properly configured
- Verify Python and pip versions
