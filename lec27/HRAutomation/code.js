module.exports = {
    answers: [
        `#include <bits/stdc++.h>
            using namespace std;
            int main(){
                int noe;
                cin >> noe;
                vector <int> array(noe);
                int soa = 0;
                for(int i=0;i< noe;i++){
                    cin >> array[i];
                    soa+=array[i];
                }

                cout << soa;
                return 0;
            }`



]
}