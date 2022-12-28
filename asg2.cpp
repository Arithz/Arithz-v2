#include <iostream>
#include <string>
using namespace std;

struct Node {
    string info;
    Node* link;
};

class LinkedList {
    private:
        int count;
        Node* first;
        Node* last;
        string infix = "";
        string postfix = "";
    public:
        int precedence(char c);
        friend string convertToPostfix();
        LinkedList() {
            first = NULL;
            last = NULL;
            count = 0;
        }
        ~LinkedList() {
            destroyList();
        }
        void getInfix(string infix) {
            this->infix = infix;
        }

        void destroyList () {
            Node* temp;
            while(first != NULL) {
                temp = first;
                first = first->link;
                delete temp;
            }
            last = NULL;
            count = 0;
        }

        void push(string s) {
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
            current = pop();
            while(current != NULL) {
                cout << current->info << " -> ";
                current = pop();
            }
        }
};

int LinkedList::precedence(char c) {
    if(c == '+' || c == '-') return 1;
    else if(c == '*' || c == '/') return 2;
    else if(c == '^') return 3;
    else return 0;
}

string convertToPostfix(string infix) {
    LinkedList stack;
    stack.push("3");
    stack.push("5");
    stack.push("4");
    stack.printList();
    return "";
}

int main() {
    string infix = "";

    cout << "Enter your infix expression: ";
    getline(cin,infix);
    convertToPostfix(infix);
}