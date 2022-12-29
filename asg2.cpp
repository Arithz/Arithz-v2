#include <iostream>
#include <string>
using namespace std;

struct Node {
    char info;
    Node* link;
};

class LinkedList {
    private:
        int count;
        Node* first;
    public:
        string infix = "";
        string postfix = "";

        int precedence(char c);
        string convertToPostfix(LinkedList&);
        LinkedList() {
            first = NULL;
            count = 0;
        }
        LinkedList(string infix) {
            first = NULL;
            count = 0;
            getInfix(infix);
        }
        ~LinkedList() {
            destroyList();
        }
        void getInfix(string infix) {
            this->infix = infix;
        }
        char peek() {
            return first != NULL? first->info: -99;
        }
        void destroyList () {
            Node* temp;
            while(first != NULL) {
                temp = first;
                first = first->link;
                delete temp;
            }
            count = 0;
        }
        void push(char s) {
            Node* newNode;
            newNode = new Node;
            newNode->info = s;
            newNode->link = first;
            first=newNode;
        }
        Node* pop() {
            Node* current;
            current = new Node;
            current = first;
            first = first->link;
            return current;
        }
        void printList() {
            Node* current; 
            current = new Node;
            current = first;
            while(current != NULL) {
                cout << current->info;
                current = current->link;
            }
        }
};

int LinkedList::precedence(char c) {
    if(c == '+' || c == '-') return 1;
    else if(c == '*' || c == '/') return 2;
    else if(c == '^') return 3;
    else return 0;
}

bool isOperator(char x) {
    char op[7] = {'+','-','*','/','^','(',')'};
    for(auto z: op) {
        if(z == x) return true;
        continue;
    }
    return false;
}

string LinkedList::convertToPostfix(LinkedList& stack) {
    Node* first =  new Node;
    for(char x: stack.infix) {
        if(x == ' ') 
            // cout << "this is space character" << endl; 
            continue;
        else if(x == '(') 
            // cout << "this is open brack" << endl; 
            stack.push(x);
        else if(x == ')'){
            // cout << "this is close brack" << endl; 
            while(stack.peek() != '(') {
                //loop not yet found a close bracket therefore pop the stack until found close bracket
                first = stack.pop();
                stack.postfix += first->info;
            }
            //remove the close bracket from stack
            stack.pop();
        }
        else if(isOperator(x)) {
            // cout << "this is operator" << endl;
            if(precedence(x) <= precedence(stack.peek())) {
                // cout << "x is lower weight with the first element in stack" <<endl;
                while(precedence(x) <= precedence(stack.peek())){
                    first = stack.pop();
                    stack.postfix += first->info;
                }
                stack.push(x);
            }
            else {
                // cout << "x is upper weight with the first element in stack" << endl;
                stack.push(x);
            }
        }else {
            // cout << " this is alphabet"<<endl;
            stack.postfix += x;
        }
        cout << "\nPostfix: " << stack.postfix;
        // cout <<"\t\tStack: "; stack.printList();
    }
    while(stack.peek() != -99) {
        first = stack.pop();
        cout << first->info << endl;
        stack.postfix += first->info;
    }
    cout << "Postfix: " << stack.postfix << endl;
    return "";
}

int main() {
    string infix = "";
    // cout << "Enter your infix expression: ";
    // getline(cin,infix);
    infix = "A+B-C";
    // infix = "(A + B) * C";
    // infix = "(A + B) * (C - D)";
    // infix = "A+((B+C)*(E-F)-G)/(H-I)";
    // infix = "A+B*(C+D)-E/F*G+H";

    LinkedList stack(infix);
    stack.convertToPostfix(stack);
}
