#!/bin/bash

echo "🚀 Portfolio Deployment Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

print_success "Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_success "npm version: $(npm --version)"

# Frontend setup
print_status "Setting up frontend..."

# Install frontend dependencies
if [ -f "package.json" ]; then
    print_status "Installing frontend dependencies..."
    npm install
    print_success "Frontend dependencies installed"
else
    print_error "package.json not found in current directory"
    exit 1
fi

# Create .env.local for frontend
print_status "Creating frontend environment file..."
cat > .env.local << EOF
# Frontend Environment Variables
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app
EOF
print_success "Frontend .env.local created"

# Backend setup
print_status "Setting up backend..."

# Check if backend directory exists
if [ ! -d "backend" ]; then
    print_error "Backend directory not found. Please ensure backend folder exists."
    exit 1
fi

# Install backend dependencies
cd backend
print_status "Installing backend dependencies..."
npm install
print_success "Backend dependencies installed"

# Create .env for backend
print_status "Creating backend environment file..."
cat > .env << EOF
# Backend Environment Variables
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.vercel.app
JWT_SECRET=your-super-secret-jwt-key-here
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
LOG_LEVEL=info
EOF
print_success "Backend .env created"

# Test backend
print_status "Testing backend..."
if npm run dev &> /dev/null & then
    BACKEND_PID=$!
    sleep 3
    if curl -s http://localhost:5000/health > /dev/null; then
        print_success "Backend is running successfully"
    else
        print_warning "Backend health check failed"
    fi
    kill $BACKEND_PID 2>/dev/null
else
    print_warning "Could not start backend for testing"
fi

cd ..

# Test frontend build
print_status "Testing frontend build..."
if npm run build > /dev/null 2>&1; then
    print_success "Frontend builds successfully"
else
    print_warning "Frontend build failed - check for errors"
fi

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "Next steps:"
echo "1. Update .env.local with your actual backend URL"
echo "2. Update backend/.env with your actual frontend URL"
echo "3. Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Ready for deployment'"
echo "   git push origin main"
echo ""
echo "4. Deploy to Vercel:"
echo "   - Go to vercel.com"
echo "   - Import your GitHub repo"
echo "   - Add environment variables"
echo ""
echo "5. Deploy backend to Railway:"
echo "   - Go to railway.app"
echo "   - Create new project from GitHub"
echo "   - Add environment variables"
echo ""
echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
echo ""
print_success "Happy deploying! 🚀" 