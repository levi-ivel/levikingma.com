import { Link } from "react-router-dom";
import "../../styles/pages/posts/AoC2025Page.css";
import "highlight.js/styles/github-dark.css";
import { Helmet } from "react-helmet-async";
import { useHighlighting } from "../../hooks/useHighlighting";
import { TableOfContents } from "../../components/TableOfContents";

export function AoC2025Page() {

    useHighlighting();

    return (
        <>
            <Helmet>
                <title>The 2025 Advent of Code Showdown - Levi Kingma</title>
                <meta name="description" content="A detailed look at the 2025 Advent of Code challenge where I participated with a new programming language for each day." />
            </Helmet>
            <nav className="top-nav">
                <Link to="/posts" className="nav-link">posts</Link>
            </nav>

            <main className="blog-container">
                <div className="post-layout">
                    <TableOfContents />
                    <article className="post-article">
                        <h1 className="blog-title">The 2025 Advent of Code Showdown</h1>

                        <div className="post-body">
                            <p>
                                The Advent of Code 2025 has come around once more, but this time only with 12 puzzles to solve.
                            </p>
                            <p>
                                To keep it interesting, my buddy <a href="https://github.com/nielsjaspers" target="_blank"
                                    rel="noopener noreferrer">Niels</a> and I decided to challenge ourselves, and each other, by
                                using a new programming language for each day.
                            </p>
                            <p>
                                This is how it went:
                            </p>

                            <h2>Rules</h2>
                            <p>
                                Let's start with the rules, they are as follows:
                            </p>
                            <ul>
                                <li>
                                    Start the day by spinning a roulette wheel containing 12 languages
                                    <br />
                                    (C++, Rust, Go, Haskell, Python, TypeScript, C#, PHP, Java, Elixir, Lua, Zig)
                                </li>
                                <li>
                                    Try to solve the day's puzzle with the chosen language before the end of the day, no more
                                    changes
                                    can be made afterwards
                                </li>
                                <li>
                                    When time's up, run each solution on the machines of all participants 1000 times, then
                                    take the average
                                </li>
                                <li>
                                    The winner of the day is the one with the fastest average solution; the one with the most days won
                                    is
                                    the overall winner
                                </li>
                                <li>NO AI</li>
                            </ul>

                            <h2>Results</h2>
                            <p>
                                So, how did it go?
                            </p>

                            <div className="days-grid">
                                <a href="https://github.com/levi-ivel/Advent-Of-Code-Showdown/tree/master/2025/Day1" target="_blank"
                                    rel="noopener noreferrer" className="day-card">
                                    <div className="day-header">Day 1</div>
                                    <div className="day-language">Language: PHP</div>
                                    <div className="day-result">
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>426 μs</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>432 μs</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/levi-ivel/Advent-Of-Code-Showdown/tree/master/2025/Day2" target="_blank"
                                    rel="noopener noreferrer" className="day-card">
                                    <div className="day-header">Day 2</div>
                                    <div className="day-language">Language: Lua</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>0.17 ms</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/levi-ivel/Advent-Of-Code-Showdown/tree/master/2025/Day3" target="_blank"
                                    rel="noopener noreferrer" className="day-card">
                                    <div className="day-header">Day 3</div>
                                    <div className="day-language">Language: Python</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>12.2 ms</span>
                                        </div>
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>1.3 ms</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/levi-ivel/Advent-Of-Code-Showdown/tree/master/2025/Day4" target="_blank"
                                    rel="noopener noreferrer" className="day-card">
                                    <div className="day-header">Day 4</div>
                                    <div className="day-language">Language: Zig</div>
                                    <div className="day-result">
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>4.8 ms</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/levi-ivel/Advent-Of-Code-Showdown/tree/master/2025/Day5" target="_blank"
                                    rel="noopener noreferrer" className="day-card">
                                    <div className="day-header">Day 5</div>
                                    <div className="day-language">Language: Java</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>4.4 ms</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/levi-ivel/Advent-Of-Code-Showdown/tree/master/2025/Day6" target="_blank"
                                    rel="noopener noreferrer" className="day-card">
                                    <div className="day-header">Day 6</div>
                                    <div className="day-language">Language: Haskell</div>
                                    <div className="day-result">
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>3.5 ms</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/levi-ivel/Advent-Of-Code-Showdown/tree/master/2025/Day7" target="_blank"
                                    rel="noopener noreferrer" className="day-card">
                                    <div className="day-header">Day 7</div>
                                    <div className="day-language">Language: Elixir</div>
                                    <div className="day-result">
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>16.2 ms</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://github.com/levi-ivel/Advent-Of-Code-Showdown/tree/master/2025/Day8" target="_blank"
                                    rel="noopener noreferrer" className="day-card">
                                    <div className="day-header">Day 8</div>
                                    <div className="day-language">Language: Go</div>
                                    <div className="day-result">
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>6.2 ms</span>
                                        </div>
                                        <div className="participant winner">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>6.2 ms</span>
                                        </div>
                                    </div>
                                </a>

                                <div className="day-card">
                                    <div className="day-header">Day 9</div>
                                    <div className="day-language">Language: C#</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="day-card">
                                    <div className="day-header">Day 10</div>
                                    <div className="day-language">Language: C/C++</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="day-card">
                                    <div className="day-header">Day 11</div>
                                    <div className="day-language">Language: Rust</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="day-card">
                                    <div className="day-header">Day 12</div>
                                    <div className="day-language">Language: JS/TS</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Timed Out</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                The results were quite close, as you can see. Below, I've highlighted a few interesting findings
                                from the competition.
                            </p>
                            <p>
                                Also, if you want to see the full solutions, you can click on the respective card.
                            </p>

                            <h2>Day 1 - Accidental Optimization</h2>
                            <p>
                                Look at this snippet:
                            </p>
                            <pre><code className="php">
                                {`$input = file_get_contents('Day1Data.txt');
$lines = explode("\\n", $input);

foreach ($lines as $line) {
    $direction = substr($line, 0, 1);

    $amount = (int)substr($line, 1);

    if ($direction == "L"){
    $dial = (($dial - $amount) % 100 + 100) % 100;
    }
    else if ($direction == "R"){
        $dial = ($dial += $amount) % 100;
    }
    ...`}
                            </code></pre>
                            <p>
                                Notice that only one line has explicit casting; this is the only line in the solution where we do this.
                            </p>
                            <p>
                                This is because the overhead from the cast is slightly faster than the overhead for the implicit
                                conversion that PHP would normally do for the calculations that come after.
                            </p>
                            <p>
                                Did I know this at the time? No, I was just throwing anything at the wall to decrease the time by
                                even a few microseconds. I find it funny that it led to an actual optimization though, and even
                                funnier that I
                                discovered after our post-game talk that Niels had the same optimization for the same reason.
                            </p>

                            <h2>Day 2 - Neat Trick</h2>
                            <p>
                                This day involved having to calculate all palindrome numbers within a range. Here's the neat trick:
                            </p>
                            <pre><code className="lua">
                                {`local first, last = field:match("(%d+)%-(%d+)")
first = tonumber(first)
last = tonumber(last)

local lastDigit = #tostring(last)

for k = 1, math.floor(lastDigit / 2) do
    local base = 10^k + 1

    local minValue = math.max(math.ceil(first / base), 10^(k-1))
    local maxValue = math.min(math.floor(last / base), 10^k - 1)

    if minValue <= maxValue then
        local count = maxValue - minValue + 1

        local sum = (minValue + maxValue) * count / 2

        counter = counter + base * sum
    end
end`}
                            </code></pre>
                            <p>
                                I'd like to go over this one in detail, cause I'm fond of this solution. The best way to explain this is to use an example. We'll use the range 100-9999.
                            </p>
                            <p>
                                We start by separating the start and end values, and getting the digit count of our end value (4 in
                                our case).
                            </p>
                            <p>
                                Then, we loop from 1 to half the digit count (2 in our case). We do half because only even-length
                                palindromes are valid in this puzzle.
                            </p>
                            <p>
                                In the first iteration (k=1), our base is 11 (10^1 + 1). Since our range starts at 100, we'd need to
                                multiply 11 by at least 10 to get inside it, but since we're limited to 1-digit numbers for k=1,
                                this step adds
                                nothing.
                            </p>
                            <p>
                                In the second iteration (k=2), our base is 101 (10^2 + 1). To stay within our 100-9999 range, our
                                2-digit multiplier (the "leftHalf") can be anything from 10 to 99.
                            </p>
                            <p>
                                Finally, we take all those valid multipliers (10 through 99), sum them up (4905), and multiply by
                                our base (101) to get the total for all 4-digit palindromes in one go.
                            </p>
                            <p>
                                We add this to our overall counter, and repeat until we've covered all digit lengths. The result for
                                this
                                range is 495405.
                            </p>
                            <p>
                                This worked, and was very fast, but it did take all the time I had for this day. Meaning I couldn't
                                solve part 2, netting Niels the win.
                            </p>

                            <h2>Day 3 - Sort of Sorted</h2>
                            <p>
                                This one was fun. I needed to find the best two-digit number in a sequence without changing their
                                relative
                                order.
                            </p>
                            <pre><code className="python">
                                {`for digit in digits:
    candidate = first * 10 + digit

    if candidate > best:
        best = candidate

    if digit > first:
        first = digit`}
                            </code></pre>
                            <p>
                                You might have heard of Stalin Sort (where you just "liquidate" any element that isn't in order),
                                and it actually
                                turned out to be a useful mental model here.
                            </p>
                            <p>
                                Though, instead of actually destroying, I'm just tracking the "best" leading digit and the "best"
                                pair we've
                                seen so far, giving us a nice O(n) solution.
                            </p>

                            <h2>Day 4 - Zig</h2>
                            <p>
                                No fancy shenanigans for this day, but I wanted to note that while Zig is quite intriguing, it
                                has a lot of
                                verbosity for things we take for granted in other languages. This is certainly not helped by the
                                fact it has
                                no stable release and therefore ever-changing syntax and documentation.
                            </p>
                            <p>
                                Here is an example:
                            </p>
                            <pre><code className="zig">
                                {`pub fn SolvePart1() !i32 {
    const alloc = std.heap.page_allocator;

    const input = try std.fs.cwd().readFileAlloc(alloc, "Day4Data.txt", std.math.maxInt(usize));
    defer alloc.free(input);

    var lines_list: std.ArrayList([]const u8) = .empty;

    var it = std.mem.splitScalar(u8, input, '\\n');
    while (it.next()) |line| {
        try lines_list.append(alloc, line);
    }
    ...`}
                            </code></pre>
                            <p>
                                Look at how much code is needed just to read a file into a list of strings! You have to pass the
                                allocator around everywhere, and free it at the end of course.
                            </p>
                            <p>
                                Despite it being so tedious, the amount of control you have is pretty cool.
                            </p>

                            <h2>Day 5 - The JVM Incident</h2>
                            <p>
                                Until now, all my code has had the same type of snippet at the end:
                            </p>
                            <pre><code className="java">
                                {`long average = 0;

for (int i = 1; i < 1000; i++){
    long start = System.nanoTime();
    System.out.println(SolvePart1());
    long end = System.nanoTime();
    long time = end - start;
    average += time;
}

double microseconds = (double) average / 1000000;
double milliseconds = microseconds / 1000;
double seconds = milliseconds / 1000;`}
                            </code></pre>
                            <p>
                                I've added this snippet to all my solutions to make it easier to satisfy the timing rule of the
                                challenge. But it actually led to a problem this time around.
                            </p>
                            <p>
                                I solved part 1, ran this code, and got a time of 0.4 milliseconds. I told Niels about it, and then
                                went out to dinner followed by a movie.
                            </p>
                            <p>
                                When I came back, I was met with a lot of messages from Niels in disbelief. Apparently my solution
                                was way
                                faster than his, way faster than anyone's solution for that matter, even faster than just reading the
                                file and nothing else.
                            </p>
                            <p>
                                After telling Niels about my entire setup, along with this snippet, he found the problem. You see,
                                the JVM has a JIT compiler that optimizes code during runtime. Since I was running the solution
                                multiple times in a loop,
                                the JVM optimized the code after the first few runs, giving me an extremely fast average.
                            </p>
                            <p>
                                I removed the loop, and got an average of 5.4 milliseconds instead, resulting in a win for Niels.
                            </p>

                            <h2>Day 6 - Getting Functional</h2>
                            <p>
                                The functional paradigm usually makes these puzzles either trivial or a nightmare. Luckily, since today's problem
                                was essentially just a giant horizontal list of numbers that needed their orientation flipped, we had
                                a perfect use case for Haskell.
                            </p>
                            <p>
                                The worksheet had numbers arranged vertically in columns, with the operator for each problem sitting
                                at the very bottom. By transposing the input, each column became a standalone list that I could
                                easily pair with its operator.
                            </p>
                            <pre><code className="haskell">
                                {`let numbers = transpose (init rows)
let operators = map T.head (last rows)

let numberGrid = map (map (either error fst . TR.decimal)) numbers

let results = sum (zipWith applyOperator operators numberGrid)`}
                            </code></pre>
                            <p>
                                Transposing the grid allowed me to use <code className="haskell">zipWith</code> to apply the operators
                                across the data in a single, clean expression.
                            </p>
                            <p>
                                The "trick" for this day was discovering that Haskell's standard <code className="haskell">read </code>
                                is notoriously slow. Switching to <code className="haskell">Data.Text.Read.decimal</code> shaved off a
                                significant amount of execution time.
                            </p>

                            <h2>Day 7 - We Love Some DP</h2>
                            <p>
                                This one started as a simple grid traversal with a few conditions, but part 2 turned into a branching nightmare real fast.
                            </p>
                            <pre><code className="elixir">
                                {`defp countTimelines(grid, {y, x} = coord, cache) do
  case Map.get(cache, coord) do
    nil ->
      line = Enum.at(grid, y)

      cond do
        line == nil or x < 0 or x >= String.length(List.first(grid)) ->
          {1, cache}

        String.at(line, x) in [".", "S"] ->
          {res, new_cache} = countTimelines(grid, {y + 1, x}, cache)
          {res, Map.put(new_cache, coord, res)}

        String.at(line, x) == "^" ->
          {left, cache_after_left} = countTimelines(grid, {y + 1, x - 1}, cache)
          {right, cache_after_right} = countTimelines(grid, {y + 1, x + 1}, cache_after_left)
          total = left + right
          {total, Map.put(cache_after_right, coord, total)}
      end

    cached_result ->
      {cached_result, cache}
  end
end`}
                            </code></pre>
                            <p>
                                Every <code className="elixir">^</code> split into two new branches, so a naive DFS would just explode.
                            </p>
                            <p>
                                Caching by coordinate fixed it. As soon as we knew the number of timelines from one point, any future
                                path landing on that same point became basically free.
                            </p>
                            <p>
                                The nice part is that the logic stayed the same, just with memoization on top.
                            </p>

                            <h2>Day 8 - Pair Pair Idk I Ran Out of Ideas</h2>
                            <p>
                                This puzzle had us linking 3D junction boxes with lights, connecting the 1000 closest pairs,
                                then multiplying the sizes of the three largest circuits.
                            </p>
                            <pre><code className="go">
                                {`const maxEdges = 1000
var closestEdges []Edge
for i := 0; i < boxes; i++ {
    for j := i + 1; j < boxes; j++ {
        dx := coords[i].X - coords[j].X
        dy := coords[i].Y - coords[j].Y
        dz := coords[i].Z - coords[j].Z
        distanceSquared := dx*dx + dy*dy + dz*dz

        if len(closestEdges) < maxEdges {
            closestEdges = append(closestEdges, Edge{i, j, distanceSquared})
            continue
        }

        if distanceSquared < closestEdges[0].DistSq {
            closestEdges[0] = Edge{i, j, distanceSquared}
            for k := 0; k < maxEdges-1; k++ {
                if closestEdges[k].DistSq < closestEdges[k+1].DistSq {
                    closestEdges[k], closestEdges[k+1] = closestEdges[k+1], closestEdges[k]
                } else {
                    break
                }
            }
        }
    }
}`}
                            </code></pre>
                            <p>
                                Instead of materializing every possible edge, I only kept a rolling list of the 1000 closest candidates
                                while scanning all pairs.
                            </p>
                            <p>
                                The nice bonus here is that squared distance is enough for comparing closeness, so there's no need
                                for square roots. After this pass, Union-Find turns those 1000 connections into circuit sizes.
                            </p>
                            <p>
                                Funnily enough, this was also the solution Niels went for, netting us the same time.
                            </p>

                            <h2>Day 9 to 12 - Reality Sets In</h2>
                            <p>
                                As you might have guessed from the results table, the final days didn't exactly go as planned.
                            </p>
                            <p>
                                Between school, work, and the increased difficulty of the puzzles, we simply didn't have the time or
                                motivation to think of and implement the solutions, especially since we had to do some in C++ and
                                Rust.
                            </p>
                            <p>
                                It's a bit of a shame to finish with a string of "Timed Out" results, but oh well.
                            </p>
                            <h2>Conclusion</h2>
                            <p>
                                In the end, I took the win. But it doesn't really feel like one due to the fact that we were
                                never able to fully sink our time and effort into the puzzles.
                            </p>
                            <p>
                                With all said and done, though, it was a fun experience. And we learned some fun facts about various languages
                                along the way. We'll
                                definitely be back for the next one with an even worse gimmick.
                            </p>
                            <p>
                                Until next year!
                            </p>
                            <footer className="post-footer">
                                <p>
                                    Enjoyed this post? Give this repo a star <a href="https://github.com/levi-ivel/levikingma.com" target="_blank" rel="noopener noreferrer">here</a> 🌟
                                </p>
                            </footer>
                        </div>
                    </article>
                </div>
            </main>
        </>
    );
}
