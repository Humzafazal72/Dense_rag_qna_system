# Dense RAG Q&A Project

## Prerequisites

- Python 3.10.15
- pip
- Node

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Humzafazal72/Dense_rag_qna_system.git
cd dense_rag_qna_system
```

### 2. Project Structure

Create the following directories in the `backend/main` directory:

```
backend/main/
├── cache/
├── chat_history/
└── documents/
```

### 3. Environment Configuration

1. Navigate to the `backend/main/utils` directory
2. Add the `.env` file with your project-specific environment variables

### 4. Install Dependencies

In the `backend` directory, run:

```bash
pip install -r requirements.txt
```

### 5. Generating Weights for Model

Navigate to the project directory and run:

```bash
cd backend/main
python weights.py
```

### 6. Database Migration

Navigate to the project directory and run:

```bash
cd backend/dense_rag_qna/
python manage.py migrate
```

### 7. Run the Development Server

```bash
cd backend/dense_rag_qna
python manage.py runserver
```

The server will start, typically at `http://127.0.0.1:8000/`

### 8. Install Dependencies Frontend:

Navigate to the project directory and run:

```bash
cd frontend
npm install
```

### 9. Run the Development Server Frontend:

Navigate to the project directory and run:

```bash
cd frontend
npm run dev
```

The server will start, typically at `http://localhost:3000`

## Troubleshooting

- Ensure all dependencies are correctly installed
- Check that the `.env` file is properly configured
- Verify Python and pip versions
