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
                                Advent of Code has come around once more, but this time with only 12 puzzles to solve.
                            </p>
                            <p>
                                To keep it interesting, my buddy <a href="https://github.com/nielsjaspers" target="_blank"
                                    rel="noopener noreferrer">Niels</a> and I decided to challenge ourselves and each other by
                                using a new programming language for each puzzle.
                            </p>
                            <p>
                                This is how it went:
                            </p>

                            <h2>Rules</h2>
                            <p>
                                Let's start with the rules. They are as follows:
                            </p>
                            <ul>
                                <li>
                                    Start the day by spinning a roulette wheel containing 12 languages
                                    <br />
                                    (C++, Rust, Go, Haskell, Python, TypeScript, C#, PHP, Java, Elixir, Lua and Zig)
                                </li>
                                <li>
                                    Try to solve the day's puzzle with the chosen language before the end of the day, no making changes afterwards
                                </li>
                                <li>
                                    When time's up, run each solution 1000 times on every participant's machine, then
                                    calculate the average runtime
                                </li>
                                <li>
                                    The winner of each day's puzzle is the participant with the lowest average runtime. The participant
                                    with the most daily wins is the overall winner
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
                                            <span>Not completed</span>
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
                                            <span>Not completed</span>
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
                                            <span>Not completed</span>
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
                                            <span>Not completed</span>
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
                                            <span>Not completed</span>
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
                                            <span>Not completed</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Not completed</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="day-card">
                                    <div className="day-header">Day 10</div>
                                    <div className="day-language">Language: C++</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Not completed</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Not completed</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="day-card">
                                    <div className="day-header">Day 11</div>
                                    <div className="day-language">Language: Rust</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Not completed</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Not completed</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="day-card">
                                    <div className="day-header">Day 12</div>
                                    <div className="day-language">Language: TypeScript</div>
                                    <div className="day-result">
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/levi-ivel.png" alt="Levi" className="profile-photo" width={40} height={40} />
                                            <span>Not completed</span>
                                        </div>
                                        <div className="participant">
                                            <img loading="lazy" src="https://github.com/nielsjaspers.png" alt="Niels" className="profile-photo" width={40} height={40} />
                                            <span>Not completed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>
                                But results only tell part of the story. Each language came with its own surprises, so let's look at
                                what stood out.
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
                                Notice that I'm only doing an explicit type cast on this line. But why only this line?
                            </p>
                            <p>
                                <code className="php">substr</code> returns both <code className="php">$direction</code> and{" "}
                                <code className="php">$amount</code> as strings, but only <code className="php">$amount</code> is used
                                as a number. <code className="php">$direction</code> stays a string and is compared with string literals,
                                while every other value in the calculations is already an integer. Without the cast, PHP converts{" "}
                                <code className="php">$amount</code> when it reaches the arithmetic. Casting it once was slightly faster
                                in my tests and shaved off a few microseconds. Casting anything else would only add work because no other
                                value needs converting.
                            </p>
                            <p>
                                Did I know this at the time? No, I was throwing anything at the wall to save even a few microseconds.
                                I find it funny that it led to a real optimization, though. It was even funnier to discover during
                                our postgame talk that Niels had made the same optimization for the same reason.
                            </p>

                            <h2>Day 2 - Neat Trick</h2>
                            <p>
                                This day involved finding invalid IDs made by repeating the same sequence of digits twice. Here's the neat trick:
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
                                I'd like to go over this one in detail because I'm fond of the solution. We'll use the range 100 to 9999 as an example.
                            </p>
                            <p>
                                We start by separating the start and end values, then count the digits in the end value. In our case,
                                that count is 4.
                            </p>
                            <p>
                                We then loop from 1 to half that digit count, which gives us possible block lengths of 1 and 2.
                                Repeating a block twice always produces a number with twice as many digits as the original block.
                            </p>
                            <p>
                                In the first iteration, <code className="lua">k</code> is 1 and the base is 11. Multiplying a one digit
                                block by 11 repeats it, so 7 becomes 77. None of those two digit results reach our range, so this
                                iteration adds nothing.
                            </p>
                            <p>
                                In the second iteration, <code className="lua">k</code> is 2 and the base is 101. Multiplying a two digit
                                block by 101 is the same as multiplying it by 100 and adding it again. For example, 12 becomes 1212.
                                To stay within our range, the block can be anything from 10 to 99.
                            </p>
                            <p>
                                Finally, we sum those valid blocks, which gives us 4905, and multiply that sum by 101. This gives us
                                the total of every valid repeated value with four digits in one calculation.
                            </p>
                            <p>
                                We add that total to the counter and repeat for every possible block length. For this range, the final
                                result is 495405.
                            </p>
                            <p>
                                This worked and was very fast, but it took all the time I had that day, meaning I couldn't solve part 2.
                                That gave Niels the win.
                            </p>

                            <h2>Day 3 - Sort of Sorted</h2>
                            <p>
                                This one was fun. I needed to choose two digits that formed the largest possible number while
                                preserving their order in the original sequence.
                            </p>
                            <pre><code className="python">
                                {`first = digits[0]
best = 0

for digit in digits:
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
                                Instead of removing anything, I track two values. <code className="python">first</code> is the largest
                                digit before the current position, while <code className="python">best</code> is the largest valid pair
                                found so far. Each digit is visited once, giving us a nice O(n) solution.
                            </p>

                            <h2>Day 4 - Zig</h2>
                            <p>
                                No fancy shenanigans for this day, but I wanted to note that while Zig is quite intriguing, it
                                requires a lot of code for things we take for granted in other languages. Zig has not reached version
                                one yet, so its APIs can still change between releases and older documentation can become outdated.
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

    const lines = try lines_list.toOwnedSlice(alloc);
    defer alloc.free(lines);
    ...`}
                            </code></pre>
                            <p>
                                Look at how much code is needed just to read a file into a list of strings! APIs that allocate memory
                                receive an allocator, and every allocation must later be released. Here, the input buffer is freed
                                directly, while <code className="zig">toOwnedSlice</code> transfers the list storage into{" "}
                                <code className="zig">lines</code> so that it can be freed before the function returns.
                            </p>
                            <p>
                                Despite it being so tedious, the amount of control you have is pretty cool.
                            </p>

                            <h2>Day 5 - The JVM Incident</h2>
                            <p>
                                Every solution up to this point ended with a benchmark loop like this:
                            </p>
                            <pre><code className="java">
                                {`long totalNanoseconds = 0;
int result = 0;

for (int i = 0; i < 1000; i++) {
    long start = System.nanoTime();
    result = SolvePart1();
    long end = System.nanoTime();
    totalNanoseconds += end - start;
}

double averageNanoseconds = (double) totalNanoseconds / 1000;
double microseconds = averageNanoseconds / 1_000;
double milliseconds = microseconds / 1_000;
double seconds = milliseconds / 1_000;

System.out.println(result);`}
                            </code></pre>
                            <p>
                                I used this approach in every language to satisfy the challenge's timing rule. The average looked
                                fine at first, but Java was secretly doing something the others weren't.
                            </p>
                            <p>
                                I solved part 1, ran this code, and got an apparent average of 0.4 milliseconds. I told Niels about
                                it, then went out to dinner followed by a movie.
                            </p>
                            <p>
                                When I came back, I found a flood of messages from Niels. My solution appeared to beat his and every
                                other solution we compared it with. Somehow, it even seemed faster than reading the file and doing
                                nothing else.
                            </p>
                            <p>
                                After I explained my setup and showed him this snippet, Niels spotted the problem. Java's JIT compiler
                                optimizes code while the program is running. Since I called the same solution 1000 times in one loop,
                                the later runs were warmed up and much faster than the first.
                            </p>
                            <p>
                                The other languages didn't speed up this way during their benchmarks, so Java's average wasn't a fair
                                comparison.
                            </p>
                            <p>
                                When I timed one cold call instead, it took 5.4 milliseconds. I also did not finish part 2, so Niels
                                won the day with his completed 4.4 millisecond solution.
                            </p>

                            <h2>Day 6 - Getting Functional</h2>
                            <p>
                                The functional paradigm usually makes these puzzles either trivial or a nightmare. Luckily, this
                                problem was a perfect use case for Haskell.
                            </p>
                            <p>
                                Each input row contained one value from every problem, while the final row contained their operators.
                                Transposing those rows grouped each vertical problem into its own list, which I could then pair with
                                the corresponding operator.
                            </p>
                            <pre><code className="haskell">
                                {`let numbers = transpose (init rows)
let operators = map T.head (last rows)

let numberGrid = map (map (either error fst . TR.decimal)) numbers

let results = sum (zipWith applyOperator operators numberGrid)`}
                            </code></pre>
                            <p>
                                Transposing the grid allowed me to use <code className="haskell">zipWith</code> to pair each operator
                                with its corresponding number column and calculate the results in a single expression.
                            </p>
                            <p>
                                The "trick" for this day was improving the number parsing. In this solution,{" "}
                                <code className="haskell">Data.Text.Read.decimal</code> was faster than the standard{" "}
                                <code className="haskell">read</code> because it parsed each <code className="haskell">Text</code> value
                                directly instead of converting it to a <code className="haskell">String</code> first.
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
                                Every <code className="elixir">^</code> split into two branches. Without a cache, different branches
                                could reach the same coordinate and recalculate the entire path below it.
                            </p>
                            <p>
                                The number of timelines below a point depends only on its coordinate, so I cached the result for each
                                one. Every reachable coordinate was calculated once, and any later visit needed only a map lookup.
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
            if len(closestEdges) == maxEdges {
                sort.Slice(closestEdges, func(a, b int) bool {
                    return closestEdges[a].DistSq > closestEdges[b].DistSq
                })
            }
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
                                motivation to design and implement the solutions, especially since we had to do some in C++ and
                                Rust.
                            </p>
                            <p>
                                It's a bit of a shame to finish with a string of "Not completed" results, but oh well.
                            </p>
                            <h2>Conclusion</h2>
                            <p>
                                In the end, I took the win. But it doesn't really feel like one due to the fact that we were
                                never able to fully sink our time and effort into the puzzles.
                            </p>
                            <p>
                                Even so, it was a great experience, and we learned plenty of interesting quirks about the different
                                languages along the way. We'll definitely be back for the next one with an even worse gimmick.
                            </p>
                            <p>
                                Until next year!
                            </p>
                            <footer className="post-footer">
                                <p>
                                    Enjoyed this post? Give this repo a star <a href="https://github.com/levi-ivel/levikingma.com" target="_blank" rel="noopener noreferrer">here</a> 🌟
                                </p>
                                <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                                    Back to Top
                                </button>
                            </footer>
                        </div>
                    </article>
                </div>
            </main>
        </>
    );
}
