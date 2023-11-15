#include <cmath>
#include <iostream>

using namespace std;

int main() {
    // From the tables
    int cache = 8;
    int block = 32;

    cout << "#define CACHE_SIZE " << cache * 1024 << "\n";
    cout << "#define INDEX_SIZE " << (cache * 1024) / block << "\n";
    cout << "#define BLOCK_SIZE " << block << "\n";
    double index = log2((cache * 1024) / block );
    double blocked = log2(block);
    cout << "#define TAGLEN " << 32 - index - blocked << "\n";
    cout << "#define INDEXLEN " << index << "\n";
    cout << "#define OFFSETLEN " << blocked << "\n";

    return 0;
}